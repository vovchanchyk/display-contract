import React from 'react';
import Loader from 'react-loader-spinner';

const Empty = () => (
  <div className="app__loading">
    <Loader
      type="Puff"
      color="#ffff"
      height={100}
      width={100}
      // timeout={10000}
    />
  </div>
);
export default Empty;
