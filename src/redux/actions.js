export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SET_FILTER = 'SET_FILTER';

// Action type for adding a task

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { description },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description },
});

// Action creator for setting a filter for tasks
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export const DELETE_TASK = 'DELETE_TASK';
// Action creator for deleting a task with a given ID
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});