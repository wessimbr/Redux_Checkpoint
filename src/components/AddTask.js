import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { setFilter } from '../redux/actions';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      dispatch(setFilter('all'));
      setTask('');
    }
  };

  return (
    <div className="task">
    <input type="text" className="edit-input" value={task} onChange={(e) => setTask(e.target.value)} />
    <button className="button" onClick={handleAddTask}>
      Add Task
    </button>
  </div>
  );
};

export default AddTask;
