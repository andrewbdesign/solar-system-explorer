import React, { Fragment } from 'react';
import SplashScreen from './SplashScreen/index';
// import Mars from './Planets/Mars/index';
import Mercury from './Planets/Mercury/index';

const App = () => {
  return (
    <Fragment>
      <SplashScreen />
      <Mercury />
      {/*<Mars /> */}
    </Fragment>
  );
};

export default App;
