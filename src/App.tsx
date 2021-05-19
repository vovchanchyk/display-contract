/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Empty from './components/Empty';
import Header from './components/Header';
import Result from './components/Result';
import dataActionCreator from './store/actions/dataActionCreator';
import useTypedSelector from './typedSelector';

function App() {
  const dispatch = useDispatch();
  const error = useTypedSelector((state) => state.error);

  useEffect(() => {
    dispatch(dataActionCreator());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      {error ? (<Empty />) : (<Result />)}

    </div>
  );
}

export default App;
