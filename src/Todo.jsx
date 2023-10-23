import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedTodo, setEditedTodo] = useState('');

  // Function to add a new task
  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  // Function to remove a task
  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  // Function to update a task
  const updateTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editedTodo;
    setTodos(updatedTodos);
    setEditIndex(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button onClick={() => updateTodo(index)}>Update</button>
              </div>
            ) : (
              <div>
                {todo}
                <button onClick={() => removeTodo(index)}>Remove</button>
                <button onClick={() => setEditIndex(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
