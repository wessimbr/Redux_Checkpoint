
import * as actionTypes from './actions';

// Initial state of the application
const initialState = {
  tasks: [],
  filter: 'all',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action to add a new task to the state
    case actionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            description: action.payload.description,
            isDone: false,
          },
        ],
      };
    
    // Action to toggle the completion status of a task
    case actionTypes.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    
    // Action to edit the description of a task
    case actionTypes.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        ),
      };
    
    // Action to set the filter for displaying tasks
    case actionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    
    // Action to delete a task from the state
    case actionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    // Default case returns the current state if the action type is not recognized
    default:
      return state;
  }
};

export default rootReducer;
