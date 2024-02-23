import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import AuthContext from '../AuthContext/auth-context'
import { useDispatch, useSelector } from 'react-redux'
import { logOutHandler } from '../Reducers/AuthSlice'

const Navbar = () => {
  const authcontext=useContext(AuthContext)
  const logIn=useSelector(state=>state.loggedIn)
  const dispatch=useDispatch();
  const email=localStorage.getItem('email')
  const logoutHandler=()=>{
    // authcontext.logout()
    dispatch(logOutHandler())
  }
  return (
    <div className={classes.nav}>
        <ul className={classes.ul}>
            <NavLink to='/'><li className={classes.li}>Home</li></NavLink>
            <div className={classes.div}>
           {logIn &&  <NavLink to='/profile'><li className={classes.li}>Profile</li></NavLink>}
          {!logIn &&  <NavLink to='/login'><li className={classes.li}>Login</li></NavLink>}
          {logIn &&  <NavLink to='/login'><li className={classes.li} onClick={logoutHandler}>Logout</li></NavLink>}
        {logIn &&  <NavLink to='/dailyexpenses'><li className={classes.li} >Expenses</li></NavLink>}
          
          


            </div>
        </ul>
    </div>
  )
}

export default Navbar