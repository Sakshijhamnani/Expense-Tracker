import React, { useContext, useState } from 'react'
import ShowDailyExpense from '../ShowDailyExpense/ShowDailyExpense'
import classes from './DailyExpenses.module.css'
import CartContext from '../CartContext/cart-context'
import { useSelector } from 'react-redux'

const DailyExpenses = () => {
  
    const [description,setDescription]=useState('')
    const [moneySpent,setMoneySpent]=useState('')
    const [category,setCategory]=useState('')
    const [data,setData]=useState([])

    const cartcontext=useContext(CartContext)
    const theme=useSelector(state=>state.thememode.theme)

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
    const divClass=theme?classes.darkdiv:classes.div
    const formClass=theme?classes.darkform:classes.form
    const headingClass=theme?classes.darkheading:classes.heading
    const labelClass=theme?classes.darklabel:classes.label
    const buttonClass=theme?classes.darkbutton:classes.button
  return (
    <div className={divClass}>
     
    <form onSubmit={submitHandler} className={formClass}>
        <h1 className={headingClass}>Expenses Tracker</h1>
        <label htmlFor='description' className={labelClass}>Description</label>
        <input type="text" id='description' onChange={descriptionHandler} value={description} className={classes.input}/>
        <label htmlFor="moneyspent" className={labelClass}>Money Spent</label>
        <input type="number" id='moneyspent' onChange={moneyHandler} value={moneySpent} className={classes.input}/>
        <label htmlFor="cars" className={labelClass}>Category:</label>
    <select name="category" id="category" onChange={categoryHandler} value={category} className={classes.input}>
       <option value="select">Select</option>
       <option value="food">Food</option>
       <option value="petrol">Petrol</option>
       <option value="salary">Salary</option>
    </select>
    <button type='submit' className={buttonClass} >Add Expense</button>
   
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