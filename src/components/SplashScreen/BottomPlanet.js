import React, { Fragment, useEffect } from 'react';
import { TimelineMax, Power2, Power1 } from 'gsap';

const BottomPlanet = () => {
  useEffect(() => {
    const tl = new TimelineMax();
    tl.from('.bottom-planet', 2, { yPercent: 50, ease: Power2.easeInOut }, '0');
  }, []);

  const onHandleMouseOver = () => {
    const tl = new TimelineMax();
    tl.to(
      '.bottom-planet',
      0.3,
      { scale: 1.1, transformOrigin: '50% 100%', ease: Power1.easeOut },
      '0',
    );
  };

  const onHandleMouseOut = () => {
    const tl = new TimelineMax();
    tl.to('.bottom-planet', 0.3, { scale: 1, ease: Power1.easeOut }, '0');
  };
  return (
    <Fragment>
      <svg
        className="bottom-planet planet"
        onMouseOver={onHandleMouseOver}
        onMouseOut={onHandleMouseOut}
        version="1.1"
        x="0px"
        y="0px"
        width="500.1px"
        height="185.2px"
        viewBox="0 0 500.1 185.2"
        style={{ enableBackground: 'new 0 0 500.1 185.2' }}
      >
        <path
          fill="#9966FF"
          d="M250,0c117.8,0,217.5,78,250.1,185.2H0C32.5,78,132.1,0,250,0L250,0z"
        />
        <path
          fill="#321791"
          d="M477.7,133.1c9.2,16.3,16.8,33.8,22.3,52.1H11.4C47.6,84.4,144.1,12.3,257.3,12.3
        C350,12.3,431.3,60.5,477.7,133.1L477.7,133.1z"
        />
        <path
          fill="#220B78"
          d="M462.7,130.3c6.9,12.2,12.5,41.3,16.7,54.9H115.2c18.4-51.2,42.8-32.5,92.7-53.7c23.3-9.9,63.7-75.2,90.6-75.2
        c25.8,0,51,18,73.5,27.1C409.8,98.7,441,96.4,462.7,130.3L462.7,130.3z M189.6,41.2c2.1,0,3.9,1.7,3.9,4c0,2.2-1.8,4-3.9,4
        c-2.2,0-3.9-1.8-3.9-4S187.4,41.2,189.6,41.2L189.6,41.2z M261.8,27.5c2.6,0,4.6,2.1,4.6,4.6c0,2.6-2,4.7-4.6,4.7
        c-2.5,0-4.6-2.1-4.6-4.7C257.3,29.6,259.3,27.5,261.8,27.5L261.8,27.5z M243.5,48.3c3.5,0,6.4,2.9,6.4,6.4s-2.8,6.4-6.4,6.4
        c-3.5,0-6.3-2.9-6.3-6.4C237.1,51.2,240,48.3,243.5,48.3L243.5,48.3z M135.9,110.9c5.3,0,9.6,4.4,9.6,9.8c0,5.4-4.3,9.8-9.6,9.8
        c-5.4,0-9.7-4.4-9.7-9.8C126.3,115.3,130.6,110.9,135.9,110.9L135.9,110.9z M87.9,107.6c11.1,0,20.1,9.1,20.1,20.4
        c0,11.2-9,20.4-20.1,20.4s-20.1-9.1-20.1-20.4C67.9,116.7,76.9,107.6,87.9,107.6L87.9,107.6z"
        />
      </svg>
    </Fragment>
  );
};

export default BottomPlanet;
