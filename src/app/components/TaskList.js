
"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function TaskList({ tasks, editTask, deleteTask }) {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleEdit = (id, title) => {
    setEditId(id);
    setEditTitle(title);
  };

  const saveEdit = (id) => {
    editTask(id, editTitle);
    setEditId(null);
  };

  return (
    <ul className='ul'>
      {tasks.map(task => (
        <li className='li' key={task.id}>
          {editId === task.id ? (
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          ) : (
            <span>{task.title}</span>
          )}
          {editId === task.id ? (
            <button className =" button" onClick={() => saveEdit(task.id)}>Save</button>
          ) : (
            <>
              <button onClick={() => handleEdit(task.id, task.title)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <Link href={`/${task.id}`}>
  View Details
</Link>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
