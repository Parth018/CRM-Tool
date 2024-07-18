import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './Header.css'; // Ensure this path is correct
// import '../components/relatio.png'
const Header = () => {
  return (
    <header>
      <div className="container">
         <h1>RELATIO</h1> 
        {/* <div className='img'></div> */}
        {/* <img  src='../components/relatio.png' title='relatio' alt='title' width="200" height="100"/> */}
        {/* <img src=".." alt="Alternative text" width="200" height="100" aria-label="For screen readers" /> */}
        <div className="auth-links">
         
          <Link to="/login">login</Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/Lead-Management">Lead Management</Link></li>
            <li><Link to="/Customer-Database">Customer Database</Link></li>
            <li><Link to="/Sales-Automation">Sales Automation</Link></li>
            <li><Link to="/Inventory-Management">Inventory Management</Link></li>
            <li><Link to="/Follow-Up-Reminders">Follow Up Reminders</Link></li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
