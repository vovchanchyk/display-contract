import { ContractDataType } from '../../functions/getDataFromContract/getDataFromContract';
import * as actionTypes from '../actions/actionTypes';

const initialState: ContractDataType[] = [];

export type DataActionType = {
    type:string;
    payload :ContractDataType[]
}

function dataReducer(state = initialState, action:DataActionType) {
  if (action.type === actionTypes.GETDATA) {
    let copy = [...state];
    copy = action.payload;
    return copy;
  }
  return state;
}
export default dataReducer;
