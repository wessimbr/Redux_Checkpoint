import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Task from './Task';
import { setFilter } from '../redux/actions';

// Define the ListTask functional component
const ListTask = () => {
  const tasks = useSelector((state) => {
    if (state.filter === 'all') {
      return state.tasks;
    } else if (state.filter === 'done') {
      return state.tasks.filter((task) => task.isDone);
    } else {
      return state.tasks.filter((task) => !task.isDone);
    }
  });

  // Get the 'dispatch' function from the Redux store
  const dispatch = useDispatch();

  // Render the ListTask component
  return (
    <div className="task-container">
      {/* Filter dropdown section */}
      <div>
        <label>
          {/* Label for the filter dropdown */}
          <div id='Filter'>Filter:</div>
          
          {/* Dropdown for selecting the task filter with onChange event to update filter in the Redux store */}
          <select
            value={useSelector((state) => state.filter)}
            onChange={(e) => dispatch(setFilter(e.target.value))}
          >
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="notDone">Not Done</option>
          </select>
        </label>
      </div>

      {/* Task list section */}
      {tasks.map((task) => (
        // Render the Task component for each task in the filtered list
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
