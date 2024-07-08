// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const { createTodo, addTask, getTodos,removeTask } = require('../controllers/todoController');

router.post('/create', createTodo);
router.post('/add-task', addTask);
router.post('/remove-task', removeTask);
router.get('/:userId', getTodos);

module.exports = router;
