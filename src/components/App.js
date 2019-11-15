import React, { Fragment } from 'react';
import SplashScreen from './SplashScreen/index';
// import Mars from './Planets/Mars/index';
// import Mercury from './Planets/Mercury/index';
// import Venus from './Planets/Venus/index';
// import Jupiter from './Planets/Jupiter/index';
// import Saturn from './Planets/Saturn/index';
// import Uranus from './Planets/Uranus/index';
import Neptune from './Planets/Neptune/index';

const App = () => {
  return (
    <Fragment>
      <SplashScreen />
      {/*
        <Mars />
        <Mercury /> 
        <Venus />
        <Jupiter />
        <Saturn />
        <Uranus />
      */}
      <Neptune />
    </Fragment>
  );
};

export default App;
