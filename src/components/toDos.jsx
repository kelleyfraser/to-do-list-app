import React from 'react';
import AppHeader from './appHeader';
import ToDoTable from './toDoTable';
import ToDoForm from './toDoForm';
import useToDoState from '../hooks/useToDoState';

const ToDos = () => {
  const saveToDo = (text => {
    const trimmedText = text.trim();
    if (trimmedText.length > 0) {
      addToDo(trimmedText)
    }
  });

  const {toDos, addToDo, markToDo, deleteToDo, resetToDoList} = useToDoState([]);

  return (
    <div>
      <AppHeader resetToDoList={resetToDoList} />
      <ToDoTable 
        toDos={toDos}
        addToDo={addToDo}
        markToDo={markToDo}
        deleteToDo={deleteToDo}
      />
      <ToDoForm saveToDo={saveToDo} />
    </div>
  );
}
 
export default ToDos;

