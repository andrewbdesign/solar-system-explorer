import React, { useEffect } from 'react';
// import { TimelineMax, Power1 } from 'gsap';
// import Parallax from 'parallax-js';

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
  useEffect(() => {
    // const tl = new TimelineMax();
    // tl.staggerFromTo(
    //   '.planet',
    //   2,
    //   { autoAlpha: 0 },
    //   { autoAlpha: 1, y: 0, ease: Power1.easeOut, force3D: false },
    //   0.2,
    //   '0',
    // );
    // const scene = document.getElementById('scene');
    // eslint-disable-next-line
    // const parallaxInstance = new Parallax(scene);
  }, []);

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
