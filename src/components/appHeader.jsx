import React from 'react';

const AppHeader = ({resetToDoList}) => {
return (
    <div className="toDoHeader-container container-fluid">
      <i onClick={resetToDoList} className="fa fa-refresh btn-icon"></i>
      <h1 className="appName">to do list</h1>
    </div>
  );
}
 
export default AppHeader;
