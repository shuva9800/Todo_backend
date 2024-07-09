// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const { createTodo, addTask, getTodos,removeTask ,updateTaskPriority} = require('../controllers/todoController');

router.post('/create', createTodo);
router.post('/add-task', addTask);
router.post('/remove-task', removeTask);
router.get('/:userId', getTodos);
router.post('/update-task', updateTaskPriority);

module.exports = router;
