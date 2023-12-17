import * as actionTypes from './actions';


const initialState = {
  tasks: [],
  filter: 'all',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case actionTypes.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case actionTypes.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        ),
      };
    case actionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case actionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    default:
      return state;
  }
};


export default rootReducer;
