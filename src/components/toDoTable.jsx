import React from 'react';
import CheckBox from './common/checkBox';

const ToDoTable = ({toDos, addToDo, markToDo, deleteToDo}) => {
  
  return (
    <div className="toDoTable-container container-fluid">
      <table className="table">
        <tbody>
          {toDos.map((toDo) => (
            <tr key={toDo.id}>
              <td>
                <CheckBox 
                  isDone={toDo.isDone} 
                  onClick={() => {markToDo(toDo.id)}} 
                />
              </td>
              <td 
                className={toDo.isDone ? "w-90 striked" : "w-90"}>
                  {toDo.text}
              </td>
              <td className="text-end">
                 <i 
                  onClick={() => {deleteToDo(toDo.id)}} 
                  className="fa fa-trash btn-icon isBlue">
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ToDoTable;