import React, { Fragment } from 'react';
import SplashScreen from './SplashScreen/index';
import Mars from './Planets/Mars/index';

const App = () => {
  return (
    <Fragment>
      <SplashScreen />
      <Mars />
    </Fragment>
  );
};

export default App;
