import React, { useState,useEffect } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
    const [items,setItems]=useState([])
    const token=localStorage.getItem('token')

    const fetchData = async () => {
        const email = localStorage.getItem('email');
        const newEmail = email.replace(/[^\w\s]/gi, "");
  
        if (!email) {
            console.error('Email not found in localStorage');
            return;
        }
  
        const response = await fetch(`https://react-http-834f8-default-rtdb.firebaseio.com/expenses/${newEmail}.json`);
  
        if (!response.ok) {
            console.error('Failed to fetch cart items');
            return;
        }
  
        const existingItems = await response.json();
        if (existingItems) {
            const updatedItems = Object.values(existingItems); // Convert object to array
            setItems(updatedItems);
        }
    };
  
    useEffect(() => {
        fetchData(); // Fetch data when component mounts
    }, [token]);

    
    const addItemHandler=async(item)=>{
      console.log(item)

      const email = localStorage.getItem('email');
      const newEmail = email.replace(/[^\w\s]/gi, "");
      if (!email) {
          console.error('Email not found in localStorage');
          return;
      }
  
      const response = await fetch(`https://react-http-834f8-default-rtdb.firebaseio.com/expenses/${newEmail}.json`)
      
      if(!response.ok){
        console.error('Failed to fetch cart items');
        return;
      }
      const ExistingItems = await response.json();
      //console.log(data);
      let updatedItems=[]
      if(ExistingItems){
        updatedItems=Object.values(ExistingItems) //Convert Object to array

      }
      updatedItems.push(item)

      const updatedResponse = await fetch(`https://react-http-834f8-default-rtdb.firebaseio.com/expenses/${newEmail}.json`,{
        method:'PUT',
        body:JSON.stringify(updatedItems),
        headers:{
          'Content-Type':'application/json'
        }
      })
      setItems(updatedItems)
    }
    const removeItemhandler=(id)=>{

    }
    let cartcontext={
        item:items,
        addItem:addItemHandler,
        removeItem:removeItemhandler,
        fetchData:fetchData
    }
  return (
    <CartContext.Provider value={cartcontext}>
    {props.children}

    </CartContext.Provider>
  )
}

export default CartProvider