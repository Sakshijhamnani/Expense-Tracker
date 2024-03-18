import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import AuthContext from '../AuthContext/auth-context'
import { useDispatch, useSelector } from 'react-redux'
import { logOutHandler } from '../Reducers/AuthSlice'
import { changeTheme } from '../Reducers/themeSlice'
import { datacall, profileData } from '../Reducers/ProfileDataRedux'

const Navbar = () => {
  // const authcontext=useContext(AuthContext)
  // const logIn=useSelector(state=>state.auth.loggedIn)
 
  // const logIn=localStorage.getItem('token')
  const logIn=useSelector(state=>state.auth.loggedIn)
  const theme=useSelector(state=>state.thememode.theme)
  const dispatch=useDispatch();
  const email=localStorage.getItem('email')


  useEffect(() => {
   //dispatch(profileData())
  }, [logIn]);
  const logoutHandler=()=>{
    // authcontext.logout()
    dispatch(logOutHandler())
  }

  const darkThemeHandler=()=>{
    if(theme===false){
      dispatch(changeTheme())
    }
   
  }
  const lightThemeHandler=()=>{
    if(theme===true){
      dispatch(changeTheme())
    }
     
  }

  const profileDataHandler=()=>[
    dispatch(datacall())
  ]
  const navClass=theme?classes.darknav:classes.nav
  const liClass=theme?classes.darkli:classes.li
  const themebuttonClass=theme?classes.darkthemebutton:classes.themebutton
  const darkClass=theme?classes.darkdark:classes.dark
  return (
    <div className={navClass}>
        <ul className={classes.ul}>
           {logIn ? <NavLink to='/home' style={{ textDecoration: 'none' }}><li className={liClass}>Home</li></NavLink>:<NavLink to='/login' style={{ textDecoration: 'none' }}><li className={liClass}>Expense Tracker</li></NavLink>}
            <div className={classes.div}>
           {/* {logIn &&  <NavLink to='/profile' style={{ textDecoration: 'none' }}><li onClick={profileDataHandler} className={liClass}>Profile</li></NavLink>} */}
          {!logIn &&  <NavLink to='/login' style={{ textDecoration: 'none' }}><li className={liClass}>Login</li></NavLink>}
          {logIn &&  <NavLink to='/login' style={{ textDecoration: 'none' }}><li className={liClass} onClick={logoutHandler}>Logout</li></NavLink>}
        {logIn &&  <NavLink to='/dailyexpenses' style={{ textDecoration: 'none' }}><li className={liClass} >Expenses</li></NavLink>}
       {logIn && <div className={themebuttonClass}>
        { !theme && <button className={darkClass} onClick={darkThemeHandler}></button>}
        {  theme && <button className={classes.light} onClick={lightThemeHandler}></button>}
        </div>}
       
          
          


            </div>
        </ul>
    </div>
  )
}

export default Navbar