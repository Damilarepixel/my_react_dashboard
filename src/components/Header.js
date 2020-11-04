import React from 'react'
import oic from './oic.png'




function Header() {
    return (
      <div className="header">
          <ul>
            <span className="material-icons">search</span>
            <span className="material-icons">notifications_none</span>
          </ul>

          <div className="admin">
            <img src={oic} alt="Admin" height="60px" width="60px" />
            <h6 id="name">Hi, Aminat</h6>
            <i class="fas fa-caret-down" id="drop"></i>
          </div>
            
          
      </div>
    );
}

export default Header;