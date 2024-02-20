import React, { useContext, useState } from 'react'
import ShowDailyExpense from '../ShowDailyExpense/ShowDailyExpense'
import classes from './DailyExpenses.module.css'
import CartContext from '../CartContext/cart-context'

const DailyExpenses = () => {
    const [description,setDescription]=useState('')
    const [moneySpent,setMoneySpent]=useState('')
    const [category,setCategory]=useState('')
    const [data,setData]=useState([])

    const cartcontext=useContext(CartContext)

    const descriptionHandler=(event)=>{
      setDescription(event.target.value)
    }
    const moneyHandler=(event)=>{
        setMoneySpent(event.target.value)
    }
    const categoryHandler=(event)=>{
        setCategory(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        let newobj={
            description,
            moneySpent,
            category
        }
        setData((prevState)=>[...prevState,newobj])

        cartcontext.addItem(newobj)
        console.log(data)
        setDescription('')
        setMoneySpent('')
        setCategory('')
    }
  return (
    <div className={classes.div}>
    <form onSubmit={submitHandler} className={classes.form}>
        <h1 className={classes.heading}>Expenses Tracker</h1>
        <label htmlFor='description' className={classes.label}>Description</label>
        <input type="text" id='description' onChange={descriptionHandler} value={description} className={classes.input}/>
        <label htmlFor="moneyspent" className={classes.label}>Money Spent</label>
        <input type="number" id='moneyspent' onChange={moneyHandler} value={moneySpent} className={classes.input}/>
        <label htmlFor="cars" className={classes.label}>Category:</label>
    <select name="category" id="category" onChange={categoryHandler} value={category} className={classes.input}>
       <option value="select">Select</option>
       <option value="food">Food</option>
       <option value="petrol">Petrol</option>
       <option value="salary">Salary</option>
    </select>
    <button type='submit' className={classes.button} >Add Expense</button>
   
    </form>
    <ShowDailyExpense data={data}
    description={description}
    setDescription={setDescription}
    moneySpent={moneySpent}
    setMoneySpent={setMoneySpent}
    category={setCategory}
    setCategory={setCategory}/>
    </div>
  )
}

export default DailyExpenses