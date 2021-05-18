import React, { useState } from 'react';

import Button from '../../UI/Button/Button';

import styles from './TodoInput.module.css';

function TodoInput(props) {

  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const todoInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTodo(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>To-do</label>
        <input 
          type="text"
          value={enteredValue}
          onChange={todoInputChangeHandler} 
        />
      </div>
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default TodoInput;
