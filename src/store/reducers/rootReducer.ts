import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  groups: dataReducer,
  error: errorReducer,

});
export type storeType = ReturnType<typeof rootReducer>

export default rootReducer;
