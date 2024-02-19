import React, { useState } from 'react'
import classes from './ForgotPassword.module.css'

const ForgotPassword = () => {
    const [email,setEmail]=useState('')
    const [loading,setLoading]=useState(false)

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
  return (
    <div className={classes.div}>
    <form onSubmit={SubmitHandler} className={classes.form}>
        <label htmlFor="email" className={classes.label}>Enter your email</label>
        <input type="email" id='email' value={email} onChange={emailChangeHandler} className={classes.input}/>
        <button type='submit' className={classes.button}>Forgot Password</button>
        {loading && <p>Loading...</p>}
       
    </form>
    </div>
  )
}

export default ForgotPassword