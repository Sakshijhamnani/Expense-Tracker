import React from 'react'
import classes from './Home.module.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div >
       <p className={classes.heading}>Welcome to Expense Tracker</p> 
       <p className={classes.p}>Your Profile is incomplete <NavLink to='/contactdetails'>Complete Now</NavLink></p>
    </div>
  )
}

export default Home