import React, { useEffect } from 'react';
import { TimelineMax } from 'gsap';

import Earth from '../../../assets/images/earth.svg';
import Saturn from '../../../assets/images/saturn.svg';
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
      '.saturn-speed-img',
      33,
      { x: width, rotation: 10, repeat: -1, ease: Linear.easeNone },
      '0',
    );
  }, []);
  return (
    <section className="speed speed-saturn">
      <h3>Speed</h3>
      <p>Velocity relative to the Sun</p>

      <div className="earth-speed">
        <img className="earth-speed-img" src={Earth} alt="" />
        <p className="earth-speed-title">Earth: 66,622 mph / 107,218 kph</p>
      </div>
      <div className="saturn-speed">
        <img className="saturn-speed-img" src={Saturn} alt="" />
        <p className="saturn-speed-title">Saturn: 21,637 mph / 34,821 kph</p>
      </div>
    </section>
  );
};

export default Speed;
