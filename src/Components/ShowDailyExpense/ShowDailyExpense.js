import React, { useContext } from 'react'
import classes from './ShowDailyExpense.module.css'
import CartContext from '../CartContext/cart-context'

const ShowDailyExpense = (props) => {
  const cartcontext=useContext(CartContext)
  return (
    <div>
     {
        cartcontext.item.map((expense,index)=>(
            <div className={classes.div} key={index}>
                <p className={classes.p}>{expense.description}</p>
                <p className={classes.p}>₹{expense.moneySpent}</p>
                <p className={classes.p}>{expense.category}</p>
            </div>
        ))
     }  
    </div>
  )
}

export default ShowDailyExpense