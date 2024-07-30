const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// GET /expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    console.error('Error in GET /expenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /expenses
router.post('/', async (req, res) => {
  try {
    const expense = new Expense(req.body);
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    console.error('Error in POST /expenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE /expenses/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error in DELETE /expenses/:id:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
