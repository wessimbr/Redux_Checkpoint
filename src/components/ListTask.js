import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../redux/actions';

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

  const dispatch = useDispatch();

  return (
    <div className="task-container">
      <div>
        <label>
          <div id='Filter'>Filter:</div>
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
  
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
