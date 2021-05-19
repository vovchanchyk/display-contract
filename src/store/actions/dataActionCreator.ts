import { Dispatch } from 'react';
import getDataFromContract from '../../functions/getDataFromContract/getDataFromContract';
import { DataActionType } from '../reducers/dataReducer';
import * as actionTypes from './actionTypes';

type error = {
    type:string
}

const dataActionCreator = () => async (dispatch: Dispatch<DataActionType | error >) => {
  try {
    const payload = await getDataFromContract().then((ress) => ress);
    dispatch({
      type: actionTypes.GETDATA,
      payload,
    });
    dispatch({ type: actionTypes.SUCCESS });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR });
  }
};

export default dataActionCreator;
