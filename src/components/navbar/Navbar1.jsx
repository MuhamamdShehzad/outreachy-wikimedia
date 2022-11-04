import React from 'react'
import {Link } from 'react-router-dom';
import './navbar1.scss'
import MenuIcon from '@mui/icons-material/Menu';
function Navbar1() {
  
  return (

   <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <MenuIcon/>
      </label>
      <label class="logo">Wikimedia</label>
      <ul>
        <li ><Link to="/" >Home</Link></li>
        <li><Link to='/Tasks'>Tasks</Link></li>
        <li><Link to="/Dashboard" >Dashboard</Link></li>
        <li><Link to="/Leaderboard" >Leaderboard</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar1