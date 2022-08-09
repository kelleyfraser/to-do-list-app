import {useState} from 'react';

const useToDoState = (initialValue) => {
  const [toDos, setToDos] = useState(initialValue);

  return {
    toDos,
    addToDo: (text) => {
      const newToDos = [...toDos];
      const newId = newToDos.length+1;
      newToDos.push({id: newId, isDone: false, text: text});
      setToDos(newToDos);
    },
    markToDo: (id) => {
      const newToDos = toDos.map(toDo => {
        return toDo.id === id ? {...toDo, isDone: !toDo.isDone} : {...toDo};
      });
      setToDos(newToDos);
    },
    deleteToDo: (id) => {
      const newToDos = toDos.filter(toDo => toDo.id !== id);
      setToDos(newToDos);
    },
    resetToDoList: () => {
      const newToDos = [];
      setToDos(newToDos);
    }
  };
};

export default useToDoState;