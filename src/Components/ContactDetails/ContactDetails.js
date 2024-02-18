import React, { useContext, useRef } from 'react'
import AuthContext from '../AuthContext/auth-context'
import classes from './ContactDetails.module.css'

const ContactDetails = () => {
    const FullNameInputRef=useRef()
    const photoUrlInputRef=useRef()

    const authcontext=useContext(AuthContext)
    const submitHandler=(event)=>{
        console.log('Token',authcontext.token)
        event.preventDefault();
      
     const enteredFullName=FullNameInputRef.current.value;
     const enteredPhotoUrl=photoUrlInputRef.current.value

     fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCyzE7q_jL2tqmuLQQXUYBsDY2OgHdHd0E', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authcontext.token,
        displayName: enteredFullName,
        photoUrl:enteredPhotoUrl,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      alert('Details upadted Succesfully')
      if (!res.ok) {
        throw new Error('Failed to update details');
      }
    
     
    })
    .catch(error => {
      console.error('Error updating details:', error);
    
    });
    }
  return (
    <div className={classes.div}>
    <form className={classes.form} onSubmit={submitHandler}>
        <h1 className={classes.heading}>Contact Details</h1>
        <label htmlFor="fullname" className={classes.label}>FullName:</label><br/>
        <input type="text" id='fullname' required ref={FullNameInputRef} className={classes.input} /><br/>
        <label htmlFor="photoUrl" className={classes.label}>Profile Photo Url:</label><br/>
        <input type="text" id='photoUrl' required ref={photoUrlInputRef} className={classes.input}/><br/>
        <button type='submit' className={classes.button}>Update</button>
    </form>
    </div>
  )
}

export default ContactDetails