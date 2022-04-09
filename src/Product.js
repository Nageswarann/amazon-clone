import React, { useState } from "react"
import "./Product.css"
import { useStateValue } from "./StateProvider"

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  let [buttonTxt, setButtonTxt] = useState("Add to Cart");
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:id,
        title: title,
        price: price,
        rating: rating,
        image:image
      }
    })
  }

  const removeFromBasket = () => {
    dispatch({
        type:'REMOVE_FROM_BASKET',
        id: id
    })
  }

  const decrementCart = () => {
    setButtonTxt(buttonTxt-1)
    removeFromBasket();
  }

  const incrementCart = () => {
    setButtonTxt(buttonTxt+1)
    addToBasket();
  }

  const initiateCount = () => {
    setButtonTxt(1);
    addToBasket();
  }

  return (
    <div className='product'>
        <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
             <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
            {Array(rating).fill().map((_,i)=>(
                <p key={i}>⭐</p>
            ))}
            
        </div>
        </div>
        <img src={image} alt="" />
        <div className="button-group">
        <button className='btn minus__button' onClick={decrementCart}> - </button>
        <button className='btn main__button' onClick={initiateCount}>{buttonTxt}</button>
        <button className='btn plus__button' onClick={incrementCart}> + </button>
        </div>
    </div>
  )
}

export default Product 