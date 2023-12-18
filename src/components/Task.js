import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';
import { deleteTask } from '../redux/actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    // Dispatches an action to toggle the completion status of the task.
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    //  Dispatches an action to edit the task if the edited content is not empty.
    if (editedTask.trim() !== '') {
      dispatch(editTask(task.id, editedTask));
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    //  Dispatches an action to delete the task.
    dispatch(deleteTask(task.id));
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
          <span style={{ fontSize: '20px' }}>{task.description}</span>
          <button className="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="button delete" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
