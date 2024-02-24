import React, { useContext } from 'react'
import classes from './ShowDailyExpense.module.css'
import CartContext from '../CartContext/cart-context'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../Reducers/themeSlice';

const ShowDailyExpense = (props) => {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    margin:'5px',
    marginLeft:'200px'
  };
  const cartcontext=useContext(CartContext)
  const theme=useSelector(state=>state.thememode.theme)
  const dispatch=useDispatch()

  const removeItemHandler=(item,index)=>{
    cartcontext.removeItem(item,index)
  }
  const editItemHandler=(item,index)=>{
    props.setDescription(item.description)
    props.setMoneySpent(item.moneySpent)
    props.setCategory(item.category)
    cartcontext.editItem(item,index)
  

  }
  let totalMoneySpent=0;
  cartcontext.item.forEach((expense) => {
    totalMoneySpent += Number(expense.moneySpent);
    // console.log(totalMoneySpent)
  });

  const darkThemehandler=()=>{
     if(theme===false){
      dispatch(changeTheme())
     }
  }

  const downloadExpensesHandler = () => {
    const data = JSON.stringify(cartcontext.item);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'expenses.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const divClass=theme?classes.darkdiv:classes.div
  const pClass=theme?classes.darkp:classes.p
  const editClass=theme?classes.darkedit:classes.edit
  const deleteClass=theme?classes.darkdelete:classes.delete
  return (
    <div>
     {totalMoneySpent>10000 ?  <button style={buttonStyle} onClick={darkThemehandler}>Activate Premium</button>:''}   <br/>
     {totalMoneySpent>10000 ? <button style={buttonStyle} onClick={downloadExpensesHandler}>Download Expenses</button>:''}
     {
        cartcontext.item.map((expense,index)=>(
            <div className={divClass} key={index}>
                <p className={pClass}>{expense.description}</p>
                <p className={pClass}>₹{expense.moneySpent}</p>
                <p className={pClass}>{expense.category}</p>
                <button className={editClass} onClick={()=>editItemHandler(expense,index)}>Edit</button>
                <button className={deleteClass} onClick={()=>removeItemHandler(expense,index)}>Delete</button>
            </div>
        ))
     }  
    </div>
  )
}

export default ShowDailyExpense