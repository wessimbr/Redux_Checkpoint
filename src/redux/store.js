import { createStore } from 'redux';
import rootReducer from './reducers';

// Create the Redux store with the root reducer
const store = createStore(rootReducer);

// Export the configured Redux store for use in the application
export default store;
