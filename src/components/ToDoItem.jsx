import React, { useState } from 'react';
import './ToDoItem.css';

function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Handle toggle completion
  const handleToggle = () => {
    onToggle(todo.id);
  };

  // Handle delete
  const handleDelete = () => {
    onDelete(todo.id);
  };

  // Handle edit mode toggle
  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  // Handle save edit
  const handleSaveEdit = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  // Handle input change during editing
  const handleEditInputChange = (e) => {
    setEditText(e.target.value);
  };

  // Handle Enter key press during editing
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="todo-checkbox"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={handleEditInputChange}
            onKeyPress={handleKeyPress}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleSaveEdit} className="save-btn" title="Save">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check"><path fill="#000000" d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"></path></svg>
            </button>
            <button onClick={handleCancelEdit} className="cancel-btn" title="Cancel">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="times"><path fill="#000000" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className="edit-btn" title="Edit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" id="comment-alt-edit"><path fill="#000000" d="M18.5,5.5h-4a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H8.5a1,1,0,0,1-1-1v-1a1,1,0,0,0-2,0v1a3,3,0,0,0,3,3h8.36l3,2.73a1,1,0,0,0,.68.27,1.1,1.1,0,0,0,.4-.08,1,1,0,0,0,.6-.92V8.5A3,3,0,0,0,18.5,5.5Zm-9.42,7H11.5a1,1,0,0,0,1-1V9.08a1,1,0,0,0-.29-.71L6.63,2.79a1,1,0,0,0-1.41,0L2.79,5.22a1,1,0,0,0,0,1.41l5.58,5.58A1,1,0,0,0,9.08,12.5ZM5.92,4.91,10.5,9.49v1h-1L4.91,5.92Z"></path></svg>
            </button>
            <button onClick={handleDelete} className="delete-btn" title="Delete">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" id="trash"><path fill="white" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"></path></svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ToDoItem;