import React, { useEffect } from 'react';
import { TimelineMax } from 'gsap';

import Earth from '../../../assets/images/earth.svg';
import Jupiter from '../../../assets/images/jupiter.svg';
import { Linear } from 'gsap/TweenLite';

const Speed = () => {
  useEffect(() => {
    const tl = new TimelineMax();
    const width = window.screen.width + 200;
    tl.to(
      '.earth-speed-img',
      10,
      { x: width, rotation: 360, repeat: -1, ease: Linear.easeNone },
      '0',
    );
    tl.to(
      '.jupiter-speed-img',
      33,
      { x: width, rotation: 360, repeat: -1, ease: Linear.easeNone },
      '0',
    );
  }, []);
  return (
    <section className="speed speed-jupiter">
      <h3>Speed</h3>
      <p>Velocity relative to the Sun</p>

      <div className="earth-speed">
        <img className="earth-speed-img" src={Earth} alt="" />
        <p className="earth-speed-title">Earth: 66,622 mph / 107,218 kph</p>
      </div>
      <div className="jupiter-speed">
        <img className="jupiter-speed-img" src={Jupiter} alt="" />
        <p className="jupiter-speed-title">Jupiter: 29,236 mph / 86,676 kph</p>
      </div>
    </section>
  );
};

export default Speed;
