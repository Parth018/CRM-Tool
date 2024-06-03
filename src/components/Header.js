import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './Header.css'; // Ensure this path is correct

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>RELATIO</h1>
        <div className="auth-links">
          <Link to="/Signup">Sign Up</Link>
          <Link to="/login">Login</Link>
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
