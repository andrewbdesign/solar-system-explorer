import React, { useEffect } from 'react';
import { TimelineMax, Bounce, Linear } from 'gsap';

const Gravity = () => {
  useEffect(() => {
    const tl = new TimelineMax({ repeat: -1, repeatDelay: 1 });
    tl.from(
      '.earth-ball, .uranus-ball',
      0.2,
      { autoAlpha: 0, ease: Linear.easeNone },
      0,
    );
    tl.from('.earth-ball', 3, { y: -170, ease: Bounce.easeOut }, '0.2');
    tl.from('.uranus-ball', 5.4, { y: -170, ease: Bounce.easeOut }, '0.2');
    tl.to(
      '.earth-ball, .uranus-ball',
      0.6,
      { autoAlpha: 0, ease: Linear.easeNone },
      5.6,
    );
  }, []);
  return (
    <section className="gravity">
      <h3>Gravity</h3>
      <p>
        On Uranus, you'd experience <span>80 less gravity</span> than you're
        used to on Earth
      </p>
      <div className="gravity-group">
        <div className="earth-gravity">
          <div className="ball earth-ball"></div>
        </div>
        <div className="uranus-gravity">
          <div className="ball uranus-ball"></div>
        </div>
      </div>
    </section>
  );
};

export default Gravity;
