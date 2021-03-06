import React, { Fragment, useEffect, useState } from 'react';
import { TimelineMax, Back, Power1, TweenLite } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

const BluePlanet = () => {
  // eslint-disable-next-line
  const plugin = [ScrollToPlugin];
  const [active, setActive] = useState(false);
  useEffect(() => {
    const tl = new TimelineMax();
    tl.from(
      '.blue-planet',
      3,
      { y: -100, x: 424, scale: 0, ease: Back.easeOut },
      '1',
    );
  }, []);

  const onHandleMouseOver = () => {
    if (!active) {
      const tl = new TimelineMax();
      tl.to('.blue-planet', 0.3, { scale: 1.3, ease: Power1.easeOut }, '0');
    }
  };

  const onHandleMouseOut = () => {
    if (!active) {
      const tl = new TimelineMax();
      tl.to('.blue-planet', 0.3, { scale: 1, ease: Power1.easeOut }, '0');
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
        '.blue-planet',
        1,
        { scale: 5, x: 180, y: 120, zIndex: 1350, ease: Power1.easeInOut },
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
      '.red-planet',
      // '.blue-planet',
      '.green-planet',
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
      // '.blue-planet',
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
        className="blue-planet planet"
        onMouseOver={onHandleMouseOver}
        onMouseOut={onHandleMouseOut}
        onClick={onClick}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="102.4px"
        height="102.5px"
        viewBox="0 0 102.4 102.5"
        style={{ enableBackground: 'new 0 0 102.4 102.5' }}
      >
        <path
          fill="#6699FF"
          d="M51.2,102.5c28.2,0,51.2-23,51.2-51.2S79.4,0.1,51.2,0.1S0,23.1,0,51.3C0,79.4,23,102.5,51.2,102.5L51.2,102.5
        z"
        />
        <path
          fill="#66BDFF"
          d="M86.4,14c1.9,1.8,3.7,3.8,5.4,5.9C87.9,20,84,20,80,20c-25,0-48.1-1.3-66.6-3.4c0.7-0.8,1.4-1.5,2.2-2.3
        c10,0.5,20.7,0.7,31.6,0.7C61.1,15,74.3,14.7,86.4,14L86.4,14z M98.1,30.5c0.3,0.7,0.6,1.5,0.9,2.2C85.8,47.2,56.7,62.9,23.6,72.2
        c-5.9,1.6-11.6,3-17.1,4.1c-2.3-4.1-4-8.5-5.1-13.2c11.2-0.8,24.3-3.1,38.3-7C62.3,49.8,83.1,40.5,98.1,30.5L98.1,30.5z
         M100.9,64.1c-0.1,0.5-0.3,1.1-0.5,1.6C89.8,70.6,78,74.9,65.6,78.4c-20.4,5.8-38.8,8-52.5,7.1c-2-2.3-3.9-4.8-5.5-7.4
        c13.4,4.5,37.8,3.3,66-4.7C83.2,70.8,92.3,67.6,100.9,64.1L100.9,64.1z M84,90.7c-4.4,3.7-9.5,6.6-15,8.6
        c-13.6-0.1-26.5-0.5-38.4-1.2c-5.8-2.6-11-6.1-15.4-10.5c18.1,1.9,40.3,3.1,64.2,3.1C80.9,90.7,82.4,90.7,84,90.7L84,90.7z"
        />
        <path
          fill="#426EC7"
          d="M88.2,86.8c-9.3,9.7-22.4,15.7-37,15.7C22.9,102.5,0,79.5,0,51.3C0,23,23,0.1,51.2,0.1L34.4,11.3l2.8,4.8
        l-3.9,9.7l3.2,12.7l6.3,3.7l0.8,7.1l-5.7,7.4l-11-1.9l-0.5,0.5l-7,12.5l5.1,9.1L25,77l13.8,0.6l9.1-5.7l3.5,4.2l4.3,0.8l-1.1,4.4
        c0.4,0,0.6,0,0.6,0l10.5,0.9c2-1,0.6-0.3,0.8-0.5l6.7-7.4l-9.3-5.7l2-4.8l9.2-3.1l4.2,7.2l-2.6,6.5l3.1,4.2l-8.6,7.3l-3.4-1.1
        l-1.5,2.5l6,3.7l9.7-5.3L88.2,86.8z M83.9,59l-4.5-0.8l-0.1-3l3.8-1.1l0.2-0.1l2.5,1.9l-0.3,1.2L83.9,59z M30.1,74.7l-0.8-0.8
        l0.9-1.9l0.9,0.7L30.1,74.7z M42,62.6l-2-1.1l-1.1,0.9v1.7l2,0.8l2-2.5L42,62.6z M60.5,13.4l-1.2-2.2l0.9-1l1.7,0.3v2.6L60.5,13.4z
         M49.6,28.2l-2-2.5l1.4-0.8l2,0.6l0.3,2L49.6,28.2z M61.3,34.7L51.7,35l-2,5.2l3.9,3.4l5.1-3.2l-0.8-2.9l2.8-0.6L61.3,34.7z
         M27,15.9l-4.8,1.2l-1.7,6l6.6,3.1l3.1-4.9L27,15.9z M17.5,47L17,48.6l1.6,1.2l0.8-2.2L17.5,47z M19.1,53.9l-5.2-1.4L11.4,57
        l4.3,3.1l6.3-5.3L19.1,53.9z M29.6,41l3.1-0.3l-0.1,2h-2.9V41H29.6z M22.2,31.9l-3.4-0.1v2.3l3.7,1.1L22.2,31.9z"
        />
        <path
          fill="#2F83C4"
          d="M84,90.7c-4.4,3.7-9.5,6.6-15,8.6c-13.6-0.1-26.5-0.5-38.4-1.2c-5.8-2.6-11-6.1-15.4-10.5
        c16.2,1.8,35.6,2.8,56.6,3l0.7,0.4l0.7-0.4c2.1,0,4.2,0,6.3,0C80.9,90.7,82.4,90.7,84,90.7L84,90.7z M13.2,85.5
        c-2-2.3-3.9-4.8-5.5-7.4c10.5,3.5,27.6,3.5,48-0.4l-0.8,3.4C38.8,84.9,24.4,86.3,13.2,85.5L13.2,85.5z M6.6,76.4
        c-2.3-4.1-4-8.5-5.1-13.2c6.9-0.5,14.4-1.5,22.5-3.1l-4.3,7.7l2.7,4.9C16.9,74.1,11.7,75.3,6.6,76.4L6.6,76.4z M13.4,16.6
        c0.7-0.8,1.4-1.5,2.2-2.3c6.8,0.3,13.8,0.5,21,0.6l0.6,1l-1,2.6c-2.7-0.2-5.3-0.4-7.8-0.6l-1.3-2.2l-4.8,1.2l-0.1,0.4
        C19.1,17.2,16.2,17,13.4,16.6L13.4,16.6z M71.2,76.8l2.2-2.4l-0.9-0.6c0.4-0.1,0.8-0.2,1.3-0.3c1.4-0.4,2.7-0.8,4.1-1.2L77,74.5
        l0.3,0.4C75.1,75.5,73.2,76.2,71.2,76.8L71.2,76.8z M42,62.6l-2-1.1l-1.1,0.9v1.7l2,0.8l2-2.5L42,62.6z"
        />
        <path
          fill="#DF99FF"
          d="M51.2,0c28.3,0,51.2,22.9,51.2,51.2c0,22.9-15,42.3-35.8,48.9c18.8-7.6,32-26,32-47.5
        c0-28.3-22.9-51.2-51.2-51.2C42,1.4,36.9,2.2,32,3.7C37.9,1.3,44.5,0,51.2,0L51.2,0z"
        />
      </svg>
    </Fragment>
  );
};

export default BluePlanet;
