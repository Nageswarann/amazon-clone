import React, { useEffect, useState } from "react"
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import {Link, useNavigate } from "react-router-dom";

import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format"
import axios from "./axios";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore/lite";


function Payment() {
const [{basket, user}, dispatch] = useStateValue();
const navigate = useNavigate()

const stripe = useStripe();
const elements = useElements();

const [succeeded, setSucceeded] = useState(false);
const [processing, setProcessing] = useState("");

const [error, setError] = useState(null);
const [disabled, setDisabled] = useState(true);
const [clientSecret, setClientSecret] = useState(true);

useEffect(()=>{
    const getClientSecret = async() => {
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${sumOfBasket}`
        });
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
}, [basket])

console.log("the secret", clientSecret);
let sumOfBasket = basket?.reduce((sum, curr)=> sum+curr.price, 0);
const userCollectionRef = collection(db, "users");
const ordersCollectionRef = collection(db, "orders");

const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if(clientSecret === true) {
        handleSuccessCallback({});
    }
    const payload= await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(async ({ paymentIntent })=>{
        handleSuccessCallback({paymentIntent});
    })
}

const handleSuccessCallback = async({paymentIntent}) => {
    await addDoc(ordersCollectionRef, {
        id: user?.uid, 
        basket: basket,
        amount: (paymentIntent?.amount)? paymentIntent?.amount: sumOfBasket,
        created: (paymentIntent?.created)? paymentIntent?.created: new Date()
    })

    setSucceeded(true);
    setError(null);
    setProcessing(false);

    dispatch({
        type: "EMPTY_BASKET"
    })

    navigate('/orders');
}

const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
}

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React lane</p>
            <p>Frontend area</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                     <h3> Order Total: {value} </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={sumOfBasket}
                  displayType={"text"}
                  thousandSeperator={false}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment