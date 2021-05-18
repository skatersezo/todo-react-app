import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';

const FormControl = styled.div`

  margin: 0.5rem 0;


  & label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

  & input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

  & input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

  &.invalid input {
  border-color: red;
  background: #ffd7d7;
}

  &.invalid label {
  color: red;
}
`;

function TodoInput(props) {

  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const todoInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTodo(enteredValue);
    setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isValid && 'invalid'}>
        <label>To-do</label>
        <input 
          type="text" 
          onChange={todoInputChangeHandler} 
        />
      </FormControl>
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default TodoInput;
