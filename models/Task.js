const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  priority: { type: String, enum: ['low', 'medium', 'high'] },
  todoListId: { type: mongoose.Schema.Types.ObjectId, ref: 'TodoList' },
});

module.exports = mongoose.model('Task', TaskSchema);
