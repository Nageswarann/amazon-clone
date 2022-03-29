import { orderBy } from 'firebase/firestore/lite'
import React from 'react'
import "./Order.css"
import moment from "moment"
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from "react-currency-format"

function Order({order}) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {order?.created != ""
          ? moment.unix(order.created).format("MMMM Do YYYY, h:mma")
          : ""}
      </p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
            <h3 className='order__total'> Order Total: {value} </h3>
        )}
        decimalScale={2}
        value={order.amount}
        displayType={"text"}
        thousandSeperator={false}
        prefix={"$"}
      />
    </div>
  );
}

export default Order