import React, { useState } from 'react'
import classes from './ForgotPassword.module.css'
import { useSelector } from 'react-redux'

const ForgotPassword = () => {
    const [email,setEmail]=useState('')
    const [loading,setLoading]=useState(false)

    const theme=useSelector(state=>state.thememode.theme)

    const emailChangeHandler=(event)=>{
     setEmail(event.target.value)
    }
    const SubmitHandler=(event)=>{
        setLoading(true)
        event.preventDefault();

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCyzE7q_jL2tqmuLQQXUYBsDY2OgHdHd0E',{
            
                method: "POST",
                body: JSON.stringify({
                  requestType: "PASSWORD_RESET",
                  email: email,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then((res) => {
                if (res.ok) {
                  return res.json();
                } else {
                  return res.json().then((data) => {
                    throw new Error(data.error.message);
                  });
                }
              })
              .then((data) => {
                console.log("New password request sent successfully", data);
              })
              .catch((err) => {
                alert(err.message);
              });
      
        

      setLoading(false)
      setEmail('')
    }
    const divClass=theme?classes.darkdiv:classes.div
    const formClass=theme?classes.darkform:classes.form
    const buttonClass=theme?classes.darkbutton:classes.button
    const labelClass=theme?classes.darklabel:classes.label
  return (
    <div className={divClass}>
    <form onSubmit={SubmitHandler} className={formClass}>
        <label htmlFor="email" className={labelClass}>Enter your email</label>
        <input type="email" id='email' value={email} onChange={emailChangeHandler} className={classes.input}/>
        <button type='submit' className={buttonClass}>Forgot Password</button>
        {loading && <p>Loading...</p>}
       
    </form>
    </div>
  )
}

export default ForgotPassword