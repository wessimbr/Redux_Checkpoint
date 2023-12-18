import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { setFilter } from '../redux/actions';

// Define the AddTask functional component
const AddTask = () => {
  // State hook to manage the task input field value
  const [task, setTask] = useState('');

  // Get the 'dispatch' function from the Redux store
  const dispatch = useDispatch();

  // Event handler for adding a new task
  
  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      dispatch(setFilter('all'));
      setTask('');
    }
  };

  // Render the AddTask component
  return (
    <div className="task">
      {/* Input field for entering the task with onChange event to update state */}
      <input type="text" className="edit-input" value={task} onChange={(e) => setTask(e.target.value)} />
      
      {/* Button to trigger the handleAddTask function */}
      <button className="button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
