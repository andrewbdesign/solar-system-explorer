import React, { Fragment } from 'react';
import SplashScreen from './SplashScreen/index';
import Mars from './Planets/Mars/index';
import Mercury from './Planets/Mercury/index';
import Venus from './Planets/Venus/index';
import Jupiter from './Planets/Jupiter/index';
import Saturn from './Planets/Saturn/index';
import Uranus from './Planets/Uranus/index';
import Neptune from './Planets/Neptune/index';
import Pluto from './Planets/Pluto/index';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPlanet } from '../actions/planets';

const App = ({ currentPlanet, setPlanet }) => {
  const renderNav = () => {
    const planets = [
      'mars',
      'mercury',
      'venus',
      'jupiter',
      'saturn',
      'uranus',
      'neptune',
      'pluto',
    ];

    return planets.map((planet, index) => {
      return (
        <li key={index} onClick={() => setPlanet(planet)}>
          {planet}
          <img
            src={require(`../assets/images/${planet}.svg`)}
            alt={`planet ${planet}`}
          />
        </li>
      );
    });
  };

  return (
    <Fragment>
      <SplashScreen />

      <nav className={currentPlanet ? 'active' : ''}>
        <ul>{renderNav()}</ul>
      </nav>

      {currentPlanet === 'mars' && <Mars />}
      {currentPlanet === 'mercury' && <Mercury />}
      {currentPlanet === 'venus' && <Venus />}
      {currentPlanet === 'jupiter' && <Jupiter />}
      {currentPlanet === 'saturn' && <Saturn />}
      {currentPlanet === 'uranus' && <Uranus />}
      {currentPlanet === 'neptune' && <Neptune />}
      {currentPlanet === 'pluto' && <Pluto />}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  currentPlanet: state.planet.currentPlanet,
});

const mapDispatchToProps = {
  setPlanet,
};

App.proptTypes = {
  currentPlanet: PropTypes.string,
  setPlanet: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
