import React, { Fragment } from 'react';
import SplashScreen from './SplashScreen/index';
// import Mars from './Planets/Mars/index';
// import Mercury from './Planets/Mercury/index';
// import Venus from './Planets/Venus/index';
import Jupiter from './Planets/Jupiter/index';

const App = () => {
  return (
    <Fragment>
      <SplashScreen />
      {/*
        <Mars />
        <Mercury /> 
        <Venus />
      */}
      <Jupiter />
    </Fragment>
  );
};

export default App;
