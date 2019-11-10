import React, { useEffect } from 'react';
import Sun from '../../../assets/images/sun.svg';
import Earth from '../../../assets/images/earth.svg';
import Venus from '../../../assets/images/venus.svg';
import { TimelineMax, Linear } from 'gsap';

const Distance = () => {
  useEffect(() => {
    animateSolarSystem();
  }, []);

  const animateSolarSystem = () => {
    const tl = new TimelineMax();
    tl.to(
      '.venus-distance-container',
      37.8,
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
      '.earth-distance-planet, .venus-distance-planet',
      2,
      { rotation: -360, repeat: -1, ease: Linear.easeNone },
      0,
    );
  };

  return (
    <section className="distance">
      <h3>Distance from Sun</h3>
      <div className="container">
        <div className="distance__container venus__distance">
          <div className="earth-distance-container">
            <img className="earth-distance-planet" src={Earth} alt="earth" />
            <div className="venus-distance-container">
              <img className="venus-distance-planet" src={Venus} alt="venus" />
              <img className="sun-distance-planet" src={Sun} alt="sun" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distance;
