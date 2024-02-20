import React, { useContext } from 'react'
import classes from './ShowDailyExpense.module.css'
import CartContext from '../CartContext/cart-context'

const ShowDailyExpense = (props) => {
  const cartcontext=useContext(CartContext)

  const removeItemHandler=(item,index)=>{
    cartcontext.removeItem(item,index)
  }
  const editItemHandler=(item,index)=>{
    props.setDescription(item.description)
    props.setMoneySpent(item.moneySpent)
    props.setCategory(item.category)
    cartcontext.editItem(item,index)
  

  }
  return (
    <div>
     {
        cartcontext.item.map((expense,index)=>(
            <div className={classes.div} key={index}>
                <p className={classes.p}>{expense.description}</p>
                <p className={classes.p}>₹{expense.moneySpent}</p>
                <p className={classes.p}>{expense.category}</p>
                <button className={classes.edit} onClick={()=>editItemHandler(expense,index)}>Edit</button>
                <button className={classes.delete} onClick={()=>removeItemHandler(expense,index)}>Delete</button>
            </div>
        ))
     }  
    </div>
  )
}

export default ShowDailyExpense