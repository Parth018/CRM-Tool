
import './InventoryManagement.css';
import React, { useState } from 'react';

const InventoryManagement = () => {
  // State for storing car inventory data
  const [cars, setCars] = useState([
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: 20000 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 22000 },
    { id: 3, make: 'Ford', model: 'Fusion', year: 2018, price: 18000 },
  ]);

  // State for storing new car input fields
  const [newCar, setNewCar] = useState({ make: '', model: '', year: '', price: '' });

  // Years dropdown options
  const years = Array.from({ length: 30 }, (_, index) => 2023 - index); // Generate 30 years starting from 2023 to 1994

  // Function to add a new car to the inventory
  const addCar = () => {
    if (newCar.make && newCar.model && newCar.year && newCar.price) {
      const id = Math.max(...cars.map(car => car.id)) + 1;
      setCars([...cars, { id, ...newCar }]);
      setNewCar({ make: '', model: '', year: '', price: '' });
    }
  };

  // Function to delete a car from the inventory
  const deleteCar = id => {
    setCars(cars.filter(car => car.id !== id));
  };

  return (
    <div className="inventory-management">
      <h2>Inventory Management</h2>
      <p>Total Cars: {cars.length}</p>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>${car.price.toLocaleString()}</td>
              <td>
                <button onClick={() => deleteCar(car.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Add New Car</h3>
      <div>
        <input
          type="text"
          placeholder="Make"
          value={newCar.make}
          onChange={e => setNewCar({ ...newCar, make: e.target.value })}
        />
        <input
          type="text"
          placeholder="Model"
          value={newCar.model}
          onChange={e => setNewCar({ ...newCar, model: e.target.value })}
        />
        <select
          value={newCar.year}
          onChange={e => setNewCar({ ...newCar, year: parseInt(e.target.value) })}
        >
          <option value="">Select Year</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        
        <input
          type="number"
          placeholder="Price"
          value={newCar.price}
          onChange={e => setNewCar({ ...newCar, price: e.target.value })}
        />
        <button onClick={addCar}>Add Car</button>
      </div>
    </div>
  );
};

export default InventoryManagement;
