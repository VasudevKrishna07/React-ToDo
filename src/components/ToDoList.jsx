import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

function ToDoList({ todos, onToggle, onDelete, onEdit }) {
  // If no todos, show empty state
  if (todos.length === 0) {
    return (
      <div className="todo-list-container">
        <div className="empty-state">
          <p>No tasks yet! Add one above to get started.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id} // Unique key for each item
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;