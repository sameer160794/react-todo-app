// components/ToDoItem.jsx
import React, { useState } from 'react';

const ToDoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, editInput);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleComplete(todo.id)}>
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
