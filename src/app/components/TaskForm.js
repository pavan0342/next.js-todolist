
import { useState } from 'react';
import { defaultTasks } from '../data/data';

export default function TaskForm({ addTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
