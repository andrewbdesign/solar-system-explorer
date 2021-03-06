import React, { Fragment, useEffect } from 'react';
import { TimelineMax, Power2, Power1 } from 'gsap';

const SidePlanet = () => {
  useEffect(() => {
    const tl = new TimelineMax();
    tl.from('.side-planet', 2, { xPercent: -50, ease: Power2.easeInOut }, '0');
  }, []);

  const onHandleMouseOver = () => {
    const tl = new TimelineMax();
    tl.to(
      '.side-planet',
      0.3,
      { scale: 1.06, transformOrigin: '0% 50%', ease: Power1.easeOut },
      '0',
    );
  };

  const onHandleMouseOut = () => {
    const tl = new TimelineMax();
    tl.to('.side-planet', 0.3, { scale: 1, ease: Power1.easeOut }, '0');
  };

  return (
    <Fragment>
      <svg
        className="side-planet planet"
        onMouseOver={onHandleMouseOver}
        onMouseOut={onHandleMouseOut}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="149.5px"
        height="609.4px"
        viewBox="0 0 149.5 609.4"
        style={{ enableBackground: 'new 0 0 149.5 609.4' }}
      >
        <defs></defs>
        <g>
          <path
            fill="#9966FF"
            d="M0,0c90.9,70.5,149.5,180.7,149.5,304.7c0,123.9-58.6,234.2-149.5,304.7V0z"
          />
          <path
            fill="#003399"
            d="M0,569V5.9c75.3,70.3,122.3,170.4,122.3,281.5S75.3,498.7,0,569L0,569z"
          />
          <path
            fill="#082C73"
            d="M0,445.2V25.6c18.8,17.6,47.3,42.9,60.1,65.5c21.1,37.1,10.3,62.2,10.3,107.9c0,27.1,25,90.1,19,116.8
        C79.1,361.6,66,418.3,0,445.2L0,445.2z"
          />
        </g>
      </svg>
       
    </Fragment>
  );
};

export default SidePlanet;
