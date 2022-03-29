import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './Login';
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider"
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders';

const promise = loadStripe("pk_test_51KiB5rSB7Rz8inLpCNO9jr5TtEFU0htJznZ8J2JNUQhdGMAhb0BEZfEvf8pnsYw6YtbucYLrnKVDMkzXlfpx6ilF00HW8iXIFM");

function App() {
  const [{basket}, dispatch] = useStateValue();
  useEffect(()=>{
    onAuthStateChanged(auth, (authUser)=> {
      console.log(authUser);
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/login" element={
            <Login />
          }>
          </Route>
          <Route path="/" element={
            <>
            <Header />
            <Home />
            </>
          }>
          </Route>
          <Route path="/checkout" element={
            <>
            <Header />
            <Checkout />
            </>
          }>
          </Route>

          <Route path="/payment" element={
            <>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            </>
          }>
          </Route>
          
          <Route path="/orders" element={
            <>
            <Header />
            <Orders />
            </>
          }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 