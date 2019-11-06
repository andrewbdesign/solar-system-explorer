import React, { Fragment, useEffect, useState } from 'react';
import { TimelineMax, Back, Power1, TweenLite } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

const RedPlanet = () => {
  // eslint-disable-next-line
  const plugin = [ScrollToPlugin];
  const [active, setActive] = useState(false);
  useEffect(() => {
    const tl = new TimelineMax();
    tl.from(
      '.red-planet',
      1.6,
      { y: 230, x: 300, scale: 0, ease: Back.easeOut },
      '1',
    );
  }, []);

  const onHandleMouseOver = () => {
    if (!active) {
      const tl = new TimelineMax();
      tl.to(
        '.red-planet',
        0.3,
        { scale: 1.3, x: 0, y: 0, ease: Power1.easeOut },
        '0',
      );
    }
  };

  const onHandleMouseOut = () => {
    if (!active) {
      const tl = new TimelineMax();
      tl.to(
        '.red-planet',
        0.3,
        { scale: 1, x: 0, y: 0, ease: Power1.easeOut },
        '0',
      );
    }
  };

  const onClick = () => {
    if (active) {
      const tl = new TimelineMax();
      showPlanets();
      tl.to(
        '.moon',
        0.6,
        { x: 0, scale: 1, y: 0, ease: Power1.easeInOut },
        '0',
      );
      tl.to(
        '.scene-overlay, .title-info',
        0.6,
        { opacity: 0, ease: Power1.easeInOut },
        '0',
      );
      tl.to('.title', 1, { autoAlpha: 1, ease: Power1.easeInOut }, '0');
    } else {
      const tl = new TimelineMax({ delay: 0.6 });
      hidePlanets();
      TweenLite.to(window, 2, {
        scrollTo: { y: '.title-info' },
        ease: Power1.easeInOut,
        delay: 0.6,
        force3D: true,
      });
      tl.to(
        '.red-planet',
        1,
        { scale: 15, x: -80, y: 120, zIndex: 1350, ease: Power1.easeInOut },
        '0',
      );
      tl.to(
        '.moon',
        1,
        { x: 100, scale: 0.7, y: -100, ease: Power1.easeInOut },
        '0',
      );
      tl.to(
        '.scene-overlay, .title-info',
        1,
        { opacity: 1, ease: Power1.easeInOut },
        '0',
      );
      tl.to('.title', 1, { autoAlpha: 0, ease: Power1.easeInOut }, '0');
    }
    setActive(!active);
  };

  const hidePlanets = () => {
    const planets = [
      // '.red-planet',
      '.blue-planet',
      '.green-planet',
      '.orange-planet',
      '.side-planet',
      '.bottom-planet',
    ];
    const tl = new TimelineMax();
    tl.to(planets, 1, { autoAlpha: 0, ease: Power1.easeInOut }, '0');
    // const planets = document.querySelectorAll('.planet');
    // console.log({ planets });

    // const result = planets.filter(planet => {
    //   planet.classList.value.includes('.red-planet');
    // });
    // console.log('result', result);
  };

  const showPlanets = () => {
    const planets = [
      // '.red-planet',
      '.blue-planet',
      '.green-planet',
      '.orange-planet',
      '.side-planet',
      '.bottom-planet',
    ];
    const tl = new TimelineMax();
    tl.to(planets, 0.6, { autoAlpha: 1, ease: Power1.easeInOut }, '0');
  };

  return (
    <Fragment>
      <svg
        className="red-planet planet"
        onMouseOver={onHandleMouseOver}
        onMouseOut={onHandleMouseOut}
        onClick={onClick}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30.6px"
        height="30.6px"
        viewBox="0 0 30.6 30.6"
        style={{ enableBackground: 'new 0 0 30.6 30.6' }}
      >
        <path
          fill="#7C1370"
          d="M15.3,30.6c8.4,0,15.3-6.9,15.3-15.3C30.6,6.9,23.7,0,15.3,0C6.9,0,0,6.9,0,15.3C0,23.8,6.9,30.6,15.3,30.6
        L15.3,30.6z"
        />
        <path
          fill="#BE2385"
          d="M23.7,2.5c4.2,2.8,6.9,7.5,6.9,12.8c0,8.5-6.9,15.3-15.3,15.3c-0.6,0-1.2,0-1.8-0.1C9.3,27.8,6.6,23,6.6,17.7
        c0-8.4,6.9-15.3,15.3-15.3C22.5,2.4,23.1,2.5,23.7,2.5L23.7,2.5z"
        />
      </svg>
    </Fragment>
  );
};

export default RedPlanet;
