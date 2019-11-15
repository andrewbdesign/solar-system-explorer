import React, { useEffect } from 'react';
import { TimelineMax } from 'gsap';

import Earth from '../../../assets/images/earth.svg';
import Pluto from '../../../assets/images/pluto.svg';
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
      '.pluto-speed-img',
      60,
      { x: width, rotation: 360, repeat: -1, ease: Linear.easeNone },
      '0',
    );
  }, []);
  return (
    <section className="speed">
      <h3>Speed</h3>
      <p>Velocity relative to the Sun</p>

      <div className="earth-speed">
        <img className="earth-speed-img" src={Earth} alt="" />
        <p className="earth-speed-title">Earth: 66,622 mph / 107,218 kph</p>
      </div>
      <div className="pluto-speed">
        <img className="pluto-speed-img" src={Pluto} alt="" />
        <p className="pluto-speed-title">Pluto: 10,623 mph / 17,096 kph</p>
      </div>
    </section>
  );
};

export default Speed;
