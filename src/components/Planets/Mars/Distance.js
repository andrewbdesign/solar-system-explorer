import React, { useEffect } from 'react';
import Sun from '../../../assets/images/sun.svg';
import Earth from '../../../assets/images/earth.svg';
import Mars from '../../../assets/images/mars.svg';
import { TimelineMax, Linear } from 'gsap';

const Distance = () => {
  useEffect(() => {
    animateSolarSystem();
  }, []);

  const animateSolarSystem = () => {
    const tl = new TimelineMax();
    tl.to(
      '.mars-distance-container',
      26.8,
      { rotation: 360, ease: Linear.easeNone, repeat: -1 },
      0,
    );
    tl.to(
      '.earth-distance-container',
      23.6,
      { rotation: 360, ease: Linear.easeNone, repeat: -1 },
      0,
    );
    tl.to(
      '.earth-distance-planet, .mars-distance-planet',
      2,
      { rotation: -360, repeat: -1, ease: Linear.easeNone },
      0,
    );
  };

  return (
    <section className="distance">
      <h3>Distance from Sun</h3>
      <div className="container">
        <div className="distance__container">
          <div className="mars-distance-container">
            <img className="mars-distance-planet" src={Mars} alt="mars" />
            <div className="earth-distance-container">
              <img className="earth-distance-planet" src={Earth} alt="earth" />
              <img className="sun-distance-planet" src={Sun} alt="sun" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distance;
