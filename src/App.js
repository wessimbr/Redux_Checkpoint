import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './style.css';

function App() {

  return (

    <div className="container">
      
      {/* Heading for the application */}
      <h1>Redux ToDo App</h1>
      
      {/* AddTask component to add new tasks */}
      <AddTask />
      
      {/* ListTask component to display the list of tasks */}
      <ListTask />
    </div>
  );
}

export default App;
