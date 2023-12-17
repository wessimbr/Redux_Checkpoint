import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './style.css';

function App() {
  return (
    <div className="container">
      <h1>Redux ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
