import React, { useEffect, useState } from 'react'
import "./Orders.css"
import { db } from "./firebase";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    const ordersCollectionRef = collection(db, "orders");

    useEffect(()=>{
        if(user) {
        const getOrders = async () => {
            const orders = await getDocs(ordersCollectionRef, {id: user?.uid})
            console.log(orders.docs.map((doc)=> ({ ...doc.data(), id: doc.id})));
            setOrders(orders.docs.map((doc)=> ({ ...doc.data(), id: doc.id})));
        }
        getOrders();
    }else {
        setOrders([])
    }
    }, [])
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders__order'>
            {orders?.map(order => (
                <Order order={order} />
            ))}    
        </div>
    </div>
  )
}

export default Orders