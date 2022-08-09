import React from 'react';
import useInputState from '../hooks/useInputState';

const ToDoForm = ({saveToDo}) => {
  const {value, reset, onChange} = useInputState('');
  
  return (
    <div className="toDoForm-container container-fluid">
        <form className="input-group">
        <input 
          className="form-control" 
          type="text" 
          onChange={onChange} 
          value={value}/>
        <button 
          className="btn btn-primary"
          onClick={e => {e.preventDefault(); saveToDo(value); reset();}}
        >
          Add
        </button>
        </form>
    </div>
  );
}

export default ToDoForm;