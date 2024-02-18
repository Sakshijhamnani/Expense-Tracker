import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.nav}>
        <ul className={classes.ul}>
            <NavLink to='/'><li className={classes.li}>Home</li></NavLink>
            <div className={classes.div}>
            <NavLink to='/login'><li className={classes.li}>Login</li></NavLink>
            <NavLink to='/profile'><li className={classes.li}>Profile</li></NavLink>

            </div>
        </ul>
    </div>
  )
}

export default Navbar