import React, { Fragment } from 'react';
import SplashScreen from './SplashScreen/index';
// import Mars from './Planets/Mars/index';
// import Mercury from './Planets/Mercury/index';
// import Venus from './Planets/Venus/index';
// import Jupiter from './Planets/Jupiter/index';
import Saturn from './Planets/Saturn/index';
import Uranus from './Planets/Uranus/index';
import Neptune from './Planets/Neptune/index';
import Pluto from './Planets/Pluto/index';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const App = ({ currentPlanet }) => {
  return (
    <Fragment>
      <SplashScreen />

      {currentPlanet === 'saturn' && <Saturn />}
      {currentPlanet === 'uranus' && <Uranus />}
      {currentPlanet === 'nepturn' && <Neptune />}
      {currentPlanet === 'pluto' && <Pluto />}
      {/*
        <Mars />
        <Mercury /> 
        <Venus />
        <Jupiter />
        
        <Uranus />
        <Neptune />
      */}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  currentPlanet: state.planet.currentPlanet,
});

App.proptTypes = {
  currentPlanet: PropTypes.string,
};

export default connect(mapStateToProps)(App);
