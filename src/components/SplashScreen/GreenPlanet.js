import React, { Fragment, useEffect, useState } from 'react';
import { TimelineMax, Back, Power1, TweenLite } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

const GreenPlanet = () => {
  // eslint-disable-next-line
  const plugin = [ScrollToPlugin];
  const [active, setActive] = useState(false);
  useEffect(() => {
    const tl = new TimelineMax();
    tl.from(
      '.green-planet',
      1.9,
      { y: 230, x: -300, scale: 0, ease: Back.easeOut },
      '1',
    );
  }, []);

  const onHandleMouseOver = () => {
    if (!active) {
      const tl = new TimelineMax();
      tl.to(
        '.green-planet',
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
        '.green-planet',
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
        '.green-planet',
        1,
        { scale: 7, x: 180, y: 120, zIndex: 1350, ease: Power1.easeInOut },
        '0',
      );
      tl.to(
        '.moon',
        1,
        { x: -100, scale: 0.7, y: -100, ease: Power1.easeInOut },
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
      '.red-planet',
      '.blue-planet',
      // '.green-planet',
      '.orange-planet',
      '.side-planet',
      '.bottom-planet',
    ];
    const tl = new TimelineMax();
    tl.to(planets, 1, { autoAlpha: 0, ease: Power1.easeInOut }, '0');
  };

  const showPlanets = () => {
    const planets = [
      '.red-planet',
      '.blue-planet',
      // '.green-planet',
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
        className="green-planet planet"
        onMouseOver={onHandleMouseOver}
        onMouseOut={onHandleMouseOut}
        onClick={onClick}
        version="1.1"
        x="0px"
        y="0px"
        width="56.2px"
        height="56.2px"
        viewBox="0 0 56.2 56.2"
        style={{ enableBackground: 'new 0 0 56.2 56.2' }}
      >
        <path
          fill="#336666"
          d="M28.1,56.2c15.5,0,28.1-12.6,28.1-28.1S43.6,0,28.1,0S0,12.6,0,28.1S12.6,56.2,28.1,56.2L28.1,56.2z"
        />
        <path
          fill="#669999"
          d="M44.3,51.1c-4.6,3.3-10.2,5.1-16.2,5.1C12.6,56.2,0,43.6,0,28.1c0-4.3,1-8.4,2.8-12.1
        C7.4,12.7,13,10.8,19,10.8c15.5,0,28.1,12.6,28.1,28.1C47.1,43.3,46.1,47.4,44.3,51.1L44.3,51.1z M35.3,9.6c1,0,1.9,0.8,1.9,1.9
        c0,1-0.9,1.9-1.9,1.9c-1.1,0-1.9-0.9-1.9-1.9C33.3,10.4,34.2,9.6,35.3,9.6L35.3,9.6z M47,17.6c0.4,0,0.7,0.3,0.7,0.7S47.4,19,47,19
        c-0.4,0-0.7-0.4-0.7-0.7S46.6,17.6,47,17.6L47,17.6z"
        />
        <path
          fill="#336666"
          d="M18.3,15c1.6,0,3,1.3,3,3s-1.4,3-3,3c-1.7,0-3-1.3-3-3S16.6,15,18.3,15L18.3,15z M27,38.5
        c0.4,0,0.7,0.3,0.7,0.7s-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7S26.6,38.5,27,38.5L27,38.5z M31.9,20.1c0.4,0,0.7,0.3,0.7,0.7
        s-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7S31.6,20.1,31.9,20.1L31.9,20.1z M40.2,29.6c0.4,0,0.7,0.3,0.7,0.7S40.6,31,40.2,31
        c-0.4,0-0.7-0.4-0.7-0.7C39.5,30,39.9,29.6,40.2,29.6L40.2,29.6z M36,43.4c0.8,0,1.4,0.6,1.4,1.4c0,0.8-0.6,1.5-1.4,1.5
        s-1.4-0.7-1.4-1.5S35.2,43.4,36,43.4L36,43.4z M23.5,50.8c0.8,0,1.5,0.6,1.5,1.4c0,0.8-0.7,1.5-1.5,1.5s-1.4-0.7-1.4-1.5
        C22.1,51.4,22.7,50.8,23.5,50.8L23.5,50.8z M42.8,46.3c1,0,1.9,0.9,1.9,1.9c0,1.1-0.9,1.9-1.9,1.9c-1.1,0-1.9-0.8-1.9-1.9
        C40.9,47.2,41.8,46.3,42.8,46.3L42.8,46.3z M36.4,24.4c1,0,1.9,0.9,1.9,1.9c0,1.1-0.9,1.9-1.9,1.9c-1.1,0-1.9-0.9-1.9-1.9
        C34.4,25.3,35.3,24.4,36.4,24.4L36.4,24.4z M9.9,26.1c1.1,0,1.9,0.9,1.9,1.9s-0.8,1.9-1.9,1.9S8,29,8,28S8.9,26.1,9.9,26.1
        L9.9,26.1z"
        />
      </svg>
    </Fragment>
  );
};

export default GreenPlanet;
