import dataReducer from './dataReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  dataReducerStates: dataReducer
});

export default rootReducer;