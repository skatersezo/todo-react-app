import React, { useState } from 'react';

import TodoList from './components/Todos/TodoList/TodoList';
import TodoInput from './components/Todos/TodoInput/TodoInput';
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([
    { text: 'Do homework!', id: 'g1' },
    { text: 'Buy bananas!', id: 'g2' }
  ]);

  const addTodoHandler = enteredText => {
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTodos;
    });
  };

  const deleteItemHandler = todoId => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.filter(todo => todo.id !== todoId);
      return updatedTodos;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No todos found. Maybe add one?</p>
  );

  if (todos.length > 0) {
    content = (
      <TodoList items={todos} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="todo-form">
        <TodoInput onAddTodo={addTodoHandler} />
      </section>
      <section id="todos">
        {content}
        {/* {todos.length > 0 && (
          <TodoList
            items={todos}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No todos found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
