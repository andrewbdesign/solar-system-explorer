import React, { useEffect } from 'react';
import { TimelineMax, Power1 } from 'gsap';

const Title = () => {
  useEffect(() => {
    const tl = new TimelineMax({ delay: 1 });
    tl.from('.heading', 1, { y: 10, autoAlpha: 0, ease: Power1.easeOut }, '0');
    tl.from(
      '.subheading',
      1,
      { y: 10, autoAlpha: 0, ease: Power1.easeOut },
      '1',
    );
  }, []);
  return (
    <div className="title">
      <h1 className="heading">
        SPACE <span>EXPLORER</span>
      </h1>
      <p className="subheading">Click on any planet to begin</p>
    </div>
  );
};

export default Title;
