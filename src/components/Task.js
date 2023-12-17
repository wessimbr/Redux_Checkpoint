import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (editedTask.trim() !== '') {
      dispatch(editTask(task.id, editedTask));
      setIsEditing(false);
    }
  };

  return (
    <div className="task">
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      {isEditing ? (
        <>
          <input type="text" className="edit-input" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
          <button className="button" onClick={handleEdit}>
            Save
          </button>
        </>
      ) : (
        <>
          <span style={{fontSize:'20px'}}>{task.description}</span>
          <button className="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
