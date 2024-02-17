import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.nav}>
        <ul>
            <NavLink to='/'><li className={classes.li}>Home</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar