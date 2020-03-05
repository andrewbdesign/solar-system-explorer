import React, { Fragment, useEffect, useState } from 'react';
import { TimelineMax, Back, Power1, TweenLite } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Neptune from '../../assets/images/neptune.svg';
// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPlanet, resetPlanets } from '../../actions/planets';

const RedPlanet = ({ setPlanet, resetPlanets }) => {

  const planets = [
    '.red-planet',
    '.blue-planet',
    '.green-planet',
    '.orange-planet',
    '.side-planet',
    '.bottom-planet',
    '.saturn-planet',
    '.uranus-planet',
  ];

  // eslint-disable-next-line
  const plugin = [ScrollToPlugin];
  const [active, setActive] = useState(false);
  useEffect(() => {
    const tl = new TimelineMax();
    tl.from('.neptune-planet', 1.6, { y: 230, x: 300, scale: 0, ease: Back.easeOut }, 1);
  }, []);

  const onHandleMouseOver = () => {
    if (!active) {
      const tl = new TimelineMax();
      tl.to( '.neptune-planet', 0.3, { scale: 1.3, x: 0, y: 0, ease: Power1.easeOut }, 0);
    }
  };

  const onHandleMouseOut = () => {
    if (!active) {
      const tl = new TimelineMax();
      tl.to('.neptune-planet', 0.3, { scale: 1, x: 0, y: 0, ease: Power1.easeOut }, 0);
    }
  };

  const onClick = () => {
    if (active) {
      const tl = new TimelineMax();
      showPlanets();
      resetPlanets();
      tl.to('.moon', 0.6, { x: 0, scale: 1, y: 0, ease: Power1.easeInOut }, 0)
        .to('.scene-overlay, .title-info', 0.6, { opacity: 0, ease: Power1.easeInOut }, 0)
        .to('.title', 1, { autoAlpha: 1, ease: Power1.easeInOut }, 0);
    } else {
      const tl = new TimelineMax({ delay: 0.6 });
      hidePlanets();
      setPlanet('neptune');
      TweenLite.to(window, 2, { scrollTo: { y: '.title-info' }, ease: Power1.easeInOut, delay: 0.6, force3D: true });
      tl.to('.neptune-planet', 1, { scale: 5, x: -80, y: -220, zIndex: 1350, ease: Power1.easeInOut }, 0)
        .to('.moon', 1, { x: 100, scale: 0.7, y: -100, ease: Power1.easeInOut }, 0)
        .to('.scene-overlay, .title-info', 1, { opacity: 1, ease: Power1.easeInOut }, 0)
        .to('.title', 1, { autoAlpha: 0, ease: Power1.easeInOut }, 0)
    }
    setActive(!active);
  };

  const hidePlanets = () => {
    const tl = new TimelineMax();
    tl.to(planets, 1, { autoAlpha: 0, ease: Power1.easeInOut }, 0);
  };

  const showPlanets = () => {
    const tl = new TimelineMax();
    tl.to(planets, 0.6, { autoAlpha: 1, ease: Power1.easeInOut }, 0);
  };

  return (
    <Fragment>
      <img
        src={Neptune}
        alt="neptune"
        className="neptune-planet planet"
        onMouseOver={onHandleMouseOver}
        onMouseOut={onHandleMouseOut}
        onClick={onClick}
      />
    </Fragment>
  );
};

RedPlanet.propTypes = {
  setPlanet: PropTypes.func.isRequired,
  resetPlanets: PropTypes.func.isRequired,
};

const mapStateToProps = null;
const mapDispatchToProps = {
  setPlanet,
  resetPlanets,
};

export default connect(mapStateToProps, mapDispatchToProps)(RedPlanet);
