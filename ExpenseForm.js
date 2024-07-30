import React, { useState } from 'react';
import './App.css';
const ExpenseForm = ({ addExpense }) => {
  const [form, setForm] = useState({ description: '', amount: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(form);
    setForm({ description: '', amount: '' });
  };

  return (

    <form  onSubmit={handleSubmit} className='f1'>
       <h1>Expense Tracker</h1>
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Name of expense"
        required
      /><br></br>
      <input
        type="number"
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      /><br></br>
      <button type="submit" id='bu'>ADD </button>
    </form>
  );
};

export default ExpenseForm;
