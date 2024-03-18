import React, { useContext } from 'react'
import classes from './Home.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {
 
  const data=useSelector(state=>state.profile.userData)
  const theme=useSelector(state=>state.thememode.theme)

  const divClass=theme?classes.darkdiv:classes.div
  const headingClass=theme? classes.darkheading:classes.heading
  const paraClass=theme?classes.darkp:classes.p
  const buttonClass=theme?classes.darkbutton:classes.button
  
  return (
    <div className={divClass} style={{ marginTop: 0 }}>
       <p className={headingClass}>Welcome to Expense Tracker</p> 
     {data?<p className={paraClass}></p> :<p className={paraClass}>Your Profile is incomplete <NavLink to='/contactdetails'>Complete Now</NavLink></p>}
     <p className={paraClass}>Want to edit the profile ? <NavLink to='/contactdetails'>Click</NavLink></p>
     <NavLink to='/verifyEmail'><button className={buttonClass}>Verify Email</button></NavLink>
    </div>
  )
}

export default Home