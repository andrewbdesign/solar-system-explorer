import React, { Fragment, useEffect } from 'react';
import { TimelineMax, Back, Power1 } from 'gsap';

const OrangePlanet = () => {
  useEffect(() => {
    const tl = new TimelineMax();
    tl.from(
      '.orange-planet',
      1.2,
      { y: -130, x: -300, scale: 0, ease: Back.easeOut },
      '1',
    );
  }, []);

  const onHandleMouseOver = () => {
    const tl = new TimelineMax();
    tl.to('.orange-planet', 0.3, { scale: 1.3, ease: Power1.easeOut }, '0');
  };

  const onHandleMouseOut = () => {
    const tl = new TimelineMax();
    tl.to('.orange-planet', 0.3, { scale: 1, ease: Power1.easeOut }, '0');
  };

  return (
    <Fragment>
      <svg
        className="orange-planet planet"
        onMouseOver={onHandleMouseOver}
        onMouseOut={onHandleMouseOut}
        version="1.1"
        x="0px"
        y="0px"
        width="140.8px"
        height="140.8px"
        viewBox="0 0 140.8 140.8"
        style={{ enableBackground: 'new 0 0 140.8 140.8' }}
      >
        <path
          fill="#FF6666"
          d="M70.4,140.7c38.8,0,70.4-31.6,70.4-70.4C140.8,31.6,109.2,0,70.4,0C31.7,0,0.1,31.6,0.1,70.3
        C0.1,109.1,31.7,140.7,70.4,140.7L70.4,140.7z"
        />
        <path
          fill="#C43F57"
          d="M70.4,0c38.9,0,70.4,31.5,70.4,70.3c0,38.9-31.5,70.4-70.4,70.4c-7.1-1.9-22-3.1-19.6-9.7
        c1.2-3.3,10.6,1.3,19.9,2.1c12.4,0.9,25.4-1.6,26.9-5.6c2.1-6-12.8-2-30-2.9c-20.4-1.1-43.8-7.1-43.2-16.6c0.5-7.2,21,2.1,41.2,3.9
        c20.6,1.9,40.9-3.8,42-15.8c1.1-12.2-18.8-9.1-41.8-9.6C44.3,86,17,78.7,16.1,65.7c-1-14,21-8.2,41.8-8.6
        c21-0.4,40.9-7.1,37.2-21.1c-2-7.6-14.5-2.8-30-2.1c-15.6,0.7-34.3-2.6-35.5-9C27.4,12.9,55.6,1.5,70.4,0L70.4,0z"
        />
        <path
          fill="#DF99FF"
          d="M70.4,0c2.3,0,4.6,0.1,6.8,0.3c-0.5,0-1.1,0-1.6,0C36.7,0.3,5.2,31.8,5.2,70.7c0,36.6,27.9,66.6,63.6,70.1
        C30.7,140,0,108.8,0,70.4C0.1,31.5,31.6,0,70.4,0L70.4,0z"
        />
      </svg>
    </Fragment>
  );
};

export default OrangePlanet;
