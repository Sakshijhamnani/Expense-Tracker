// import React, { useContext, useRef, useState } from 'react'
// import classes from './AuthForm.module.css'
// import { useNavigate } from 'react-router';
// import { NavLink } from 'react-router-dom';
// import AuthContext from '../AuthContext/auth-context';
// import { useDispatch, useSelector } from 'react-redux';
// import { logInHandler } from '../Reducers/AuthSlice';

// const SignUp = () => {
//     const emailInputRef=useRef();
//     const passwordInputRef=useRef();
//     const confirmPasswordInputRef=useRef()
//     const dispatch=useDispatch()
//     const authcontext=useContext(AuthContext)

//     const [logIn,setLogIn]=useState(false)
//    const loggedIn=useSelector(state=>state.auth.loggedIn)
    
//     const navigate=useNavigate()

//     const switchAuthModeHandler=()=>{
//       setLogIn(prevState=>!(prevState))
//     }

//     const SubmitHandler=(event)=>{
//      event.preventDefault();

//      dispatch(logInHandler())
//      console.log('submit loggedIn',loggedIn)
//      console.log('submit logIn',logIn)

//      const enteredEmail=emailInputRef.current.value;
//      const enetredPassword=passwordInputRef.current.value;
//      const enteredConfirmPassword=confirmPasswordInputRef.current.value

    

//      if(logIn ){
//       fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCyzE7q_jL2tqmuLQQXUYBsDY2OgHdHd0E',
//       {
//         method:'POST',
//         body:JSON.stringify({
//           email:enteredEmail,
//           password:enetredPassword,
//           returnSecureToken:true
//         }),
//         headers:{
//           'Content-Type':'application/json'
//         }
//       }).then(res=>{
//         //setIsLoading(false)
//         if(res.ok){
//          console.log(res)
//          return res.json()
//         }else{
//           return res.json().then((data) => {
//             let errorMessage = "Authentication Failed!";
//             if (data && data.error.message && data.error.message) {
//               errorMessage = data.error.message;
//             }
//              alert(errorMessage);
//             throw new Error(errorMessage)
//           });
//         }
//       })
//       .then((data)=>{
//         // console.log(data.Response)
      
//         navigate('/dailyexpenses')
//         const idToken=data.idToken
//         const email=data.email
//         console.log(idToken)
//         localStorage.setItem('token',idToken)
//         localStorage.setItem('email',email)
//         dispatch(logInHandler());
      
//       })
//       .catch((err)=>{
//         alert(err.message)
//       })

//      }
//      else{
//       fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCyzE7q_jL2tqmuLQQXUYBsDY2OgHdHd0E',
//       {
//         method:'POST',
//         body:JSON.stringify({
//           email:enteredEmail,
//           password:enetredPassword,
//           returnSecureToken:true
//         }),
//         headers:{
//           'Content-Type':'application/json'
//         }
//       }).then(res=>{
//        // setIsLoading(false)
//         if(res.ok){
//            console.log('User has successfully signed up.')
//         }else{
//           return res.json().then((data) => {
//             let errorMessage = "Authentication Failed!";
//             if (data && data.error.message && data.error.message) {
//               errorMessage = data.error.message;
//             }
//             alert(errorMessage);
//            // throw new Error(errorMessage)
//           });
//         }
//       })
//       .catch(error => {
//         console.error('Error during sign up:', error);
       
//         passwordInputRef.current.value = '';
//         confirmPasswordInputRef.current.value = '';
//     });
//      }
//     }
//   return (
//     <div className={classes.div}>
//     <form className={classes.form} onSubmit={SubmitHandler}>
//         <h1 className={classes.heading}>{logIn?'LogIn':'Sign Up'}</h1>
//         <label htmlFor="email" className={classes.label}>Email:</label><br/>
//         <input type="email" placeholder='Email' id='email' className={classes.input} ref={emailInputRef} required/><br/>
//         <label htmlFor="password" className={classes.label}>Password:</label><br/>
//         <input type="password" placeholder='Password' id='password' className={classes.input} ref={passwordInputRef} required/><br/>
//        { <label htmlFor="confirmpassword" className={classes.label}>Confirm Password:</label>}<br/>
//       {   <input type="password" placeholder='Confirm Password' id='confirmpassword' className={classes.input} ref={confirmPasswordInputRef} required/>}<br/>
//         <button className={classes.button}>{logIn ? 'LogIn':'Create New Account'}</button>
//         {logIn && <NavLink to='/forgotpassword' style={{textDecoration:'none'}}><p>Forgot Password</p></NavLink>}
//         <p className={classes.p} onClick={switchAuthModeHandler}>{logIn?"Create new account":'Login with existing account'}</p>
     

//     </form>
//     </div>
//   )
// }

// export default SignUp



import React, { useContext, useRef, useState } from 'react';
import classes from './AuthForm.module.css';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import AuthContext from '../AuthContext/auth-context';
import { useDispatch, useSelector } from 'react-redux';
import { logInHandler } from '../Reducers/AuthSlice';
import CartContext from '../CartContext/cart-context';

const SignUp = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const dispatch = useDispatch();
  const cartcontext=useContext(CartContext);
  // const loggedIn = useSelector(state => state.auth.loggedIn);
  const[ loggedIn,setLoggedIn]=useState(true)

  const navigate = useNavigate();
 

  const switchAuthModeHandler = () => {
   
    setLoggedIn((prev)=>!prev)
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    if (loggedIn) {
      // Log in process
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCyzE7q_jL2tqmuLQQXUYBsDY2OgHdHd0E', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Authentication Failed');
        }
      })
      .then(data => {
       
        localStorage.setItem('token', data.idToken);
        localStorage.setItem('email', enteredEmail);
  
        
        dispatch(logInHandler());
  
      
        cartcontext.fetchData(); 
  
       
        navigate('/dailyexpenses');
      })
      .catch(error => {
        console.error('Error during login:', error);
        alert('Authentication Failed');
      });
    }
           else{
            const enteredConfirmPassword = confirmPasswordInputRef.current.value;
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCyzE7q_jL2tqmuLQQXUYBsDY2OgHdHd0E',
            {
              method:'POST',
              body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
              }),
              headers:{
                'Content-Type':'application/json'
              }
            }).then(res=>{
             // setIsLoading(false)
              if(res.ok){
                navigate('/dailyexpenses')
                 console.log('User has successfully signed up.')
              }else{
                return res.json().then((data) => {
                  let errorMessage = "Authentication Failed!";
                  if (data && data.error.message && data.error.message) {
                    errorMessage = data.error.message;
                  }
                  alert(errorMessage);
                 // throw new Error(errorMessage)
                });
              }
            })
           .catch(error => {
              console.error('Error during sign up:', error);
             
              passwordInputRef.current.value = '';
              confirmPasswordInputRef.current.value = '';
           });
           }
  };

  return (
    <div className={classes.div}>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <h1 className={classes.heading}>{loggedIn ? 'Log In' : 'Sign Up'}</h1>
        <label htmlFor="email" className={classes.label}>Email:</label><br />
        <input type="email" placeholder='Email' id='email' className={classes.input} ref={emailInputRef} required /><br />
        <label htmlFor="password" className={classes.label}>Password:</label><br />
        <input type="password" placeholder='Password' id='password' className={classes.input} ref={passwordInputRef} required /><br />
        {loggedIn || <><label htmlFor="confirmpassword" className={classes.label}>Confirm Password:</label><br />
          <input type="password" placeholder='Confirm Password' id='confirmpassword' className={classes.input} ref={confirmPasswordInputRef} required /><br /></>}
        <button className={classes.button}>{loggedIn ? 'Log In' : 'Create New Account'}</button>
        {loggedIn && <NavLink to='/forgotpassword' style={{ textDecoration: 'none' }}><p>Forgot Password</p></NavLink>}
        <p className={classes.p} onClick={switchAuthModeHandler}>{loggedIn ? "Create new account" : 'Login with existing account'}</p>
      </form>
    </div>
  )
}

export default SignUp;
