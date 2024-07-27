// src/components/Details.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [healthIssues, setHealthIssues] = useState('');
  const [bmi, setBmi] = useState(null);
  const navigate = useNavigate();

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBmi);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-xl mb-4">Enter your details</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Height (cm)</label>
          <input
            type="number"
            className="border p-2 w-full"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Weight (kg)</label>
          <input
            type="number"
            className="border p-2 w-full"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Health Issues</label>
          <textarea
            className="border p-2 w-full"
            value={healthIssues}
            onChange={(e) => setHealthIssues(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
        {bmi && (
          <div className="mt-4">
            <h3 className="text-xl">BMI: {bmi}</h3>
            <p>Height: {height} cm</p>
            <p>Weight: {weight} kg</p>
            <p>Health Issues: {healthIssues}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Details;