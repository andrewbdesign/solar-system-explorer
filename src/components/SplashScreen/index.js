import React from 'react';

// Components
import Stars from './Stars';
import Moon from './Moon';
import SidePlanet from './SidePlanet';
import BluePlanet from './BluePlanet';
import RedPlanet from './RedPlanet';
import GreenPlanet from './GreenPlanet';
import OrangePlanet from './OrangePlanet';
import BottomPlanet from './BottomPlanet';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';
import Pluto from './Pluto';
import Shadows from './Shadows';
import Title from './Title';

const Index = () => {
  return (
    <div id="scene">
      <Title />
      <Stars />
      <Moon />
      <SidePlanet />
      <BluePlanet />
      <RedPlanet />
      <GreenPlanet />
      <OrangePlanet />
      <BottomPlanet />
      <Shadows />
      <Saturn />
      <Uranus />
      <Neptune />
      <Pluto />
      <div className="scene-overlay"></div>
    </div>
  );
};

export default Index;
