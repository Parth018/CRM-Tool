import React, { useState } from 'react';
import './FollowUpReminders.css';

const FollowUpReminders = () => {
  // State for storing follow-up reminders
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedLeadId, setSelectedLeadId] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState('');
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carColor, setCarColor] = useState('');
  const [quotation, setQuotation] = useState('');

  // Function to add a new reminder
  const addReminder = () => {
    if (
      newReminder.trim() !== '' &&
      selectedCustomer.trim() !== '' &&
      selectedLeadId.trim() !== '' &&
      (selectedEmail.trim() !== '' || selectedPhoneNumber.trim() !== '') &&
      carMake.trim() !== '' &&
      carModel.trim() !== '' &&
      carYear.trim() !== '' &&
      carColor.trim() !== '' &&
      quotation.trim() !== ''
    ) {
      setReminders([
        ...reminders,
        {
          reminder: newReminder,
          customer: selectedCustomer,
          leadId: selectedLeadId,
          email: selectedEmail,
          phoneNumber: selectedPhoneNumber,
          carMake,
          carModel,
          carYear,
          carColor,
          quotation,
        },
      ]);
      setNewReminder('');
      setSelectedCustomer('');
      setSelectedLeadId('');
      setSelectedEmail('');
      setSelectedPhoneNumber('');
      setCarMake('');
      setCarModel('');
      setCarYear('');
      setCarColor('');
      setQuotation('');
    } else {
      alert('Please fill in all the fields');
    }
  };

  // Function to delete a reminder
  const deleteReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
  };

  // Function to clear all reminders
  const clearReminders = () => {
    setReminders([]);
  };

  // Function to simulate sending a message
  const sendMessage = (reminder) => {
    const message = `
      Hello ${reminder.customer},

      Here are the details of the car you inquired about:

      Make: ${reminder.carMake}
      Model: ${reminder.carModel}
      Year: ${reminder.carYear}
      Color: ${reminder.carColor}
      Quotation: ${reminder.quotation}

      Best regards,
      Your Sales Team
    `;
    alert(`Message sent to ${reminder.email ? reminder.email : reminder.phoneNumber}:\n${message}`);
  };

  return (
    <div className="follow-up-reminders">
      <h2>Follow Up Reminders</h2>
      <div>
        <input
          type="text"
          placeholder="Add new reminder"
          value={newReminder}
          onChange={(e) => setNewReminder(e.target.value)}
        />
        <input
          type="text"
          placeholder="Customer Name"
          value={selectedCustomer}
          onChange={(e) => setSelectedCustomer(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lead ID (A000 Format)"
          value={selectedLeadId}
          onChange={(e) => setSelectedLeadId(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={selectedEmail}
          onChange={(e) => setSelectedEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={selectedPhoneNumber}
          onChange={(e) => setSelectedPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Car Make"
          value={carMake}
          onChange={(e) => setCarMake(e.target.value)}
        />
        <input
          type="text"
          placeholder="Car Model"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
        <input
          type="number"
          placeholder="Car Year"
          value={carYear}
          onChange={(e) => setCarYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Car Color"
          value={carColor}
          onChange={(e) => setCarColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Quotation"
          value={quotation}
          onChange={(e) => setQuotation(e.target.value)}
        />
        <button onClick={addReminder}>Add</button>
      </div>
      {reminders.length > 0 ? (
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              <span>{reminder.reminder}</span>
              <span>{reminder.customer}</span>
              <span>{reminder.leadId}</span>
              <span>{reminder.email}</span>
              <span>{reminder.phoneNumber}</span>
              <span>{reminder.carMake}</span>
              <span>{reminder.carModel}</span>
              <span>{reminder.carYear}</span>
              <span>{reminder.carColor}</span>
              <span>{reminder.quotation}</span>
              <button onClick={() => deleteReminder(index)}>Delete</button>
              <button onClick={() => sendMessage(reminder)}>Send Message</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reminders</p>
      )}
      {reminders.length > 0 && <button onClick={clearReminders}>Clear All</button>}
    </div>
  );
};

export default FollowUpReminders;
