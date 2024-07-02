import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login'; 
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LeadManagement from './pages/LeadManagement';
import CustomerDatabase from './pages/CustomerDatabase';
import SalesAutomation from './pages/SalesAutomation';
import FollowUpReminders from './pages/FollowUpReminders';
import InventoryManagement from './pages/InventoryManagement';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      
        <Route path="/login" element={<Login />} /> {/* Add the login route */}
        <Route path="/Lead-Management" element={<LeadManagement />} />
        <Route path="/customer-database" element={<CustomerDatabase />} />
        <Route path="/sales-automation" element={<SalesAutomation />} />
        <Route path="/follow-up-reminders" element={<FollowUpReminders />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        
      </Routes>
    </Router>
  );
}

export default App;
