import React, { useState } from 'react';
import './LeadManagement.css'; // Import CSS file for styling

const LeadManagement = () => {
  const [leads, setLeads] = useState([]); // State to manage leads
  const [newLeadId, setNewLeadId] = useState(''); // State for new lead ID
  const [newLeadStatus, setNewLeadStatus] = useState('New'); // State for new lead status
  const [newLeadPriority, setNewLeadPriority] = useState('Low'); // State for new lead priority
  const [carMake, setCarMake] = useState(''); // State for car make
  const [carModel, setCarModel] = useState(''); // State for car model
  const [carYear, setCarYear] = useState(''); // State for car year

  // Function to validate lead ID format: one alphabet + three digits
  const validateLeadId = (leadId) => {
    const regex = /^[A-Z]\d{3}$/; // Regular expression for the format: one alphabet + three digits
    return regex.test(leadId);
  };

  // Function to add a new lead
  const addLead = () => {
    if (validateLeadId(newLeadId)) {
      const newLead = {
        id: newLeadId, // Use provided lead ID
        status: newLeadStatus,
        priority: newLeadPriority,
        car: {
          make: carMake,
          model: carModel,
          year: carYear,
        },
      };
      setLeads([...leads, newLead]);
      // Clear input fields after adding lead
      setNewLeadId('');
      setNewLeadStatus('New');
      setNewLeadPriority('Low');
      setCarMake('');
      setCarModel('');
      setCarYear('');
    } else {
      alert('Lead ID must be in the format: one alphabet + three digits (e.g., A001, B002, etc.)');
    }
  };

  // Function to delete a lead
  const deleteLead = (leadId) => {
    const updatedLeads = leads.filter((lead) => lead.id !== leadId);
    setLeads(updatedLeads);
  };

  return (
    <div className="lead-management-container">
      <h2 className="lead-management-title">Lead Management</h2>
      <div className="lead-management-content">
        <p>This is where you can manage your leads, track interactions, and prioritize follow-ups.</p>
        
        {/* Form to add a new lead */}
        <form onSubmit={(e) => { e.preventDefault(); addLead(); }}>
          <input
            type="text"
            placeholder="Lead ID (e.g., A001)"
            value={newLeadId}
            onChange={(e) => setNewLeadId(e.target.value.toUpperCase())} // Convert input to uppercase
            pattern="[A-Z]\d{3}" // Enforce pattern for one alphabet + three digits
            required
          />
          <select  className= "listvalue" value={newLeadStatus} onChange={(e) => setNewLeadStatus(e.target.value)}>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Closed">Closed</option>
          </select>
          <select className= "listvalue" value={newLeadPriority} onChange={(e) => setNewLeadPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="text"
            placeholder="Car Make"
            value={carMake}
            onChange={(e) => setCarMake(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Car Model"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Car Year"
            value={carYear}
            onChange={(e) => setCarYear(e.target.value)}
            required
          />
          <button type="submit">Add New Lead</button>
        </form>
        
        {/* Display list of leads */}
        <div className="lead-list">
          {leads.length > 0 ? (
            <ul>
              {leads.map((lead) => (
                <li key={lead.id}>
                  <strong>{lead.id}</strong> - Status: {lead.status}, Priority: {lead.priority}, Car: {lead.car.make} {lead.car.model} ({lead.car.year})
                  <button onClick={() => deleteLead(lead.id)}>Delete</button>
                  <button onClick={() => console.log(`Saving lead: ${lead.id}`)}>Save</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No leads found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadManagement;
