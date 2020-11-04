import React from 'react'



function Sidebar() {
    return (
      <div className="sidebar-menu">
        <h1>Clean Admin</h1> 

        <div className="sideIcons">
          <ul id="iconsList">
            <li className="centered active"><i class="fas fa-igloo" title='Home'></i></li>
            <li className="centered"><i class="fas fa-exchange-alt" title='Exchange'></i></li>
            <li className="centered"><i class="far fa-user" title='Account'></i></li>
            <li className="centered"><i class="fas fa-tools" title='Settings'></i></li>
          </ul>
        </div>
      </div>
    );
}

export default Sidebar;