import * as actionTypes from '../actions/actionTypes';

const initialState = true;

export type ErrorActionType = {
    type:string;

}

function errorReducer(state = initialState, action:ErrorActionType) {
  if (action.type === actionTypes.ERROR) {
    const copy = true;

    return copy;
  } if (action.type === actionTypes.SUCCESS) {
    const copy = false;

    return copy;
  }
  return state;
}
export default errorReducer;
