// controllers/todoController.js
const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
 
  try {
    const {name,userId}= req.body
    // let todo = new Todo({
    //   name,
    //   user: userId,
    // });
    const toodo = await Todo.create({name: name, user: userId});
    // await todo.save();
    res.status(201).json({ msg: 'Todo list created successfully', toodo });
  } catch (err) {
    res.status(500).json({
      success:false,
      error:err.message,
      message:'server error'
    });
  }
};

exports.addTask = async (req, res) => {
  const { todoId, title, description, dueDate, priority } = req.body;
  try {
    let todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo list not found' });
    }
    todo.tasks.push({ title, description, dueDate, priority });
    await todo.save();
    res.status(200).json({ msg: 'Task added successfully', todo });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getTodos = async (req, res) => {
  const { userId } = req.params;
  try {
    let todos = await Todo.find({ user: userId });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

//remove task from todo list
exports.removeTask = async (req, res) => {
  const { todoId, taskId } = req.body;

  try {
    let todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo list not found' });
    }

    // Find the task index
    const taskIndex = todo.tasks.findIndex((task) => task._id.toString() === taskId);
    if (taskIndex === -1) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    // Remove the task from the array
    todo.tasks.splice(taskIndex, 1);

    await todo.save();
    res.status(200).json({ msg: 'Task removed successfully', todo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
