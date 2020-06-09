import React from 'react';

import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import TodoInputs from './Components/TodoInputs';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="row">
        <div>
            <TodoInputs />
            <TodoList /> 
            </div>
     
    </div>
  );
}

export default App;
