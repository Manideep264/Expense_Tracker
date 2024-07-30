import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3002/expenses')
      .then((response) => setExpenses(response.data))
      .catch((err) => handleError(err, 'GET /expenses'));
  }, []);

  const addExpense = (expense) => {
    axios
      .post('http://localhost:3002/expenses', expense)
      .then((response) => {
        setExpenses([...expenses, response.data]);
      })
      .catch((err) => handleError(err, 'POST /expenses'));
  };

  const deleteExpense = (id) => {
    console.log('delete icon is clicked');
    axios
      .delete(`http://localhost:3002/expenses/${id}`)
      .then((result) => window.location.reload())
      .catch((err) => handleError(err, 'DELETE /expenses/${id}'));
  };

  const handleError = (err, context) => {
    if (err.response) {
      console.error(`Error during ${context}:`, err.response.data);
      console.error('Status code:', err.response.status);
      console.error('Headers:', err.response.headers);
    } else if (err.request) {
      console.error(`No response received during ${context}:`, err.request);
    } else {
      console.error(`Error during ${context}:`, err.message);
    }
  };

  return (
    <div>
      
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
