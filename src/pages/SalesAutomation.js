import React, { useState } from 'react';
import './SalesAutomation.css';

const SalesAutomation = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaignName, setNewCampaignName] = useState('');
  const [campaignType, setCampaignType] = useState('Email Marketing');
  const [salesTasks, setSalesTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [taskType, setTaskType] = useState('Follow-Up Calls');

  // Function to add a new campaign
  const addCampaign = () => {
    if (newCampaignName.trim() !== '') {
      setCampaigns([...campaigns, { name: newCampaignName, type: campaignType }]);
      setNewCampaignName('');
    }
  };

  // Function to save a campaign
  const saveCampaign = (index) => {
    console.log(`Saving campaign: ${campaigns[index].name}`);
    // Additional logic to save the campaign can be added here
  };

  // Function to delete a campaign
  const deleteCampaign = (index) => {
    const updatedCampaigns = campaigns.filter((_, i) => i !== index);
    setCampaigns(updatedCampaigns);
  };

  // Function to add a new sales task
  const addSalesTask = () => {
    if (newTaskName.trim() !== '') {
      setSalesTasks([...salesTasks, { name: newTaskName, type: taskType }]);
      setNewTaskName('');
    }
  };

  // Function to save a sales task
  const saveSalesTask = (index) => {
    console.log(`Saving task: ${salesTasks[index].name}`);
    // Additional logic to save the task can be added here
  };

  // Function to delete a sales task
  const deleteSalesTask = (index) => {
    const updatedSalesTasks = salesTasks.filter((_, i) => i !== index);
    setSalesTasks(updatedSalesTasks);
  };

  return (
    <div className="sales-automation-container">
      <h2>Sales Automation</h2>
      <p>Welcome to the Sales Automation page. Here you can automate various sales processes.</p>
      
      <div className="campaigns-section">
        <h3>Sales Campaigns</h3>
        <input
          type="text"
          placeholder="New Campaign Name"
          value={newCampaignName}
          onChange={(e) => setNewCampaignName(e.target.value)}
        />
        <select value={campaignType} onChange={(e) => setCampaignType(e.target.value)}>
          <option value="Email Marketing">Email Marketing</option>
          <option value="Social Media">Social Media</option>
          <option value="PPC Advertising">PPC Advertising</option>
          <option value="Referral Program">Referral Program</option>
          <option value="Product Launch">Product Launch</option>
        </select>
        <button onClick={addCampaign}>Add Campaign</button>
        <ul>
          {campaigns.map((campaign, index) => (
            <li key={index}>
              {campaign.name} ({campaign.type})
              <button onClick={() => saveCampaign(index)}>Save</button>
              <button onClick={() => deleteCampaign(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="tasks-section">
        <h3>Sales Tasks</h3>
        <input
          type="text"
          placeholder="New Task Name"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <select value={taskType} onChange={(e) => setTaskType(e.target.value)}>
          <option value="Follow-Up Calls">Follow-Up Calls</option>
          <option value="Product Demos">Product Demos</option>
          <option value="Proposal Preparation">Proposal Preparation</option>
          <option value="Customer Onboarding">Customer Onboarding</option>
          <option value="Sales Training">Sales Training</option>
        </select>
        <button onClick={addSalesTask}>Add Task</button>
        <ul>
          {salesTasks.map((task, index) => (
            <li key={index}>
              {task.name} ({task.type})
              <button onClick={() => saveSalesTask(index)}>Save</button>
              <button onClick={() => deleteSalesTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SalesAutomation;
