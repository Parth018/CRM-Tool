import React, { useState } from 'react';
import './CustomerDatabase.css'; // Import the CSS file

const CustomerDatabase = () => {
  // Example state for customer data
  const [customers, setCustomers] = useState([
    { id: 'A001', name: 'Dev Moncy', email: 'john@example.com', phone: '+1' },
    { id: 'B002', name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 'C003', name: 'Tom Johnson', email: 'tom@example.com', phone: '555-555-5555' }
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle contacting a customer via email
  const contactByEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  // Function to handle contacting a customer via phone
  const contactByPhone = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  // Function to handle editing customer data
  const handleEdit = (id, field, value) => {
    const updatedCustomers = customers.map(customer => {
      if (customer.id === id) {
        return { ...customer, [field]: value };
      }
      return customer;
    });
    setCustomers(updatedCustomers);
  };

  // Function to handle deleting a customer
  const handleDelete = (id) => {
    const updatedCustomers = customers.filter(customer => customer.id !== id);
    setCustomers(updatedCustomers);
  };

  // Function to filter customers based on search query
  const filteredCustomers = customers.filter(customer =>
    customer.id.toLowerCase().includes(searchQuery.toLowerCase()) || // Search by Lead ID
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.phone.includes(searchQuery)
  );

  return (
    <div className="customer-database-container">
      <h2> Customer Database(Received data from Dealer)</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Lead ID, name, email, or phone"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Lead ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td contentEditable onBlur={(e) => handleEdit(customer.id, 'name', e.target.innerText)}>{customer.name}</td>
              <td contentEditable onBlur={(e) => handleEdit(customer.id, 'email', e.target.innerText)}>{customer.email}</td>
              <td contentEditable onBlur={(e) => handleEdit(customer.id, 'phone', e.target.innerText)}>{customer.phone}</td>
              <td>
                <button onClick={() => contactByEmail(customer.email)}>Email</button>
                <button onClick={() => contactByPhone(customer.phone)}>Call</button>
                <button onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDatabase;
