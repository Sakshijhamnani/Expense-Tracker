import React, { useContext, useRef } from 'react'
// import AuthContext from '../AuthContext/auth-context'
import classes from './ContactDetails.module.css'
import {useSelector,useDispatch} from 'react-redux'

const ContactDetails = () => {
    const token=useSelector(state=>state.auth.token)
    const FullNameInputRef=useRef()
    const photoUrlInputRef=useRef()
    const theme=useSelector(state=>state.thememode.theme)

    // const authcontext=useContext(AuthContext)
    const submitHandler=(event)=>{
        console.log('Token',token)
        event.preventDefault();
        console('theme',theme)
      
     const enteredFullName=FullNameInputRef.current.value;
     const enteredPhotoUrl=photoUrlInputRef.current.value

     fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCyzE7q_jL2tqmuLQQXUYBsDY2OgHdHd0E', {
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
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

    const formClass = theme ? classes.darkform : classes.form;
    const buttonClass = theme ? classes.darkbutton : classes.button;
    const headingClass = theme ? classes.darkheading : classes.heading;
    const divClass = theme ? classes.darkdiv : classes.div;
    const labelClass=theme ? classes.darklabel :classes.label

  return (
    <div className={divClass}>
    <form className={formClass} onSubmit={submitHandler}>
        <h1 className={headingClass}>Contact Details</h1>
        <label htmlFor="fullname" className={labelClass}>FullName:</label><br/>
        <input type="text" id='fullname' required ref={FullNameInputRef} className={classes.input} placeholder='enter fullname'/><br/>
        <label htmlFor="photoUrl" className={labelClass}>Profile Photo Url:</label><br/>
        <input type="text" id='photoUrl' required ref={photoUrlInputRef} className={classes.input} placeholder='enter url'/><br/>
        <button type='submit' className={buttonClass}>Update</button>
    </form>
    </div>
  )
}

export default ContactDetails