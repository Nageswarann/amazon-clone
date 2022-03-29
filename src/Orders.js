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
            let allOrders = orders.docs.map((doc)=> ({ ...doc.data(), id: doc.id}))
            let userOrdered = allOrders.filter((order)=> order.email == user?.email);
            userOrdered.sort((a,b)=> (new Date(a.created?.seconds) > new Date(b.created?.seconds)));
            setOrders(userOrdered);
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