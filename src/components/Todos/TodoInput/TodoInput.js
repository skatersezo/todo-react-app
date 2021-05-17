import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './TodoInput.css';

function TodoInput(props) {

  const [enteredValue, setEnteredValue] = useState('');

  const todoInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>To-do</label>
        <input type="text" onChange={todoInputChangeHandler} />
      </div>
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default TodoInput;
