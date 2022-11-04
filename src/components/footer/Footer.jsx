import React from 'react'
import './footer.scss'
import {Link } from 'react-router-dom';
function Footer() {
  return (
 <footer>
    <div class="footer-content">
    <h3><Link to='/'></Link>Wikimedia</h3>
    <p>Open Source hub.</p>
    
  </div>
<div class="footer-bottom">
  <p><a href="https://wikimediafoundation.org">Wikimedia Foundation</a></p>
  <div class="footer-menu">
 <ul class="f-menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to='/Tasks'>Tasks</Link></li>
    <li><Link to="/Dashboard">Dashboard</Link></li>
    <li><Link to="/Leaderboard">Leaderboard</Link></li>
 </ul>
</div>
</div>

</footer>
  )
}

export default Footer