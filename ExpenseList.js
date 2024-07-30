import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs'; 
import './App.css';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <ul id='list'>
      {expenses.map((expense) => (
        <li key={expense._id} 
            style={{ display: 'flex', alignItems: 'center' }}
            >
          <span>{expense.description}</span>: Rs.{expense.amount}

          <BsFillTrashFill id='icon'
            onClick={() => deleteExpense(expense._id)} 
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
