import React from 'react';
import "./css.css"
import {Link} from 'react-router-dom'



function Navbar()  {
const sair=()=>{
  localStorage.setItem("id","");
}

  return(<>
  
  <div class="nav" style={{zIndex:"2"}}>
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            GymTastic
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links ">
            <ul>
          <li><Link to="/home" >Home</Link></li>
          <li><Link to="/pay" >Subscrição</Link></li>
          <li><Link to="/historico" >Histórico</Link></li>
          <li><Link to="/"  onClick={() =>sair()}>Log out</Link></li>
      

          </ul>
        </div>
      </div>
  </>)
}

export default Navbar;