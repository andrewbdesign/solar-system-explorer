import React, { Fragment } from 'react';
import Earth from '../../../assets/images/earth.svg';
import Neptune from '../../../assets/images/neptune.svg';

const Size = () => {
  return (
    <Fragment>
      <h3>Size</h3>
      <p>Equatorial diameter</p>
      <div className="size">
        <div className="container">
          <div className="size__container">
            <div className="planet-size planet-size-earth planet-size-earth-neptune">
              <div className="earth-size">
                <p>100%</p>
                <img src={Earth} alt="earth" />
              </div>
              <p className="size-planet-title">Earth</p>
              <p className="miles">7,926 miles</p>
              <p className="kms">12,756 km</p>
              <span></span>
            </div>

            <div className="planet-size planet-size-neptune">
              <div className="neptune-size">
                <p>400%</p>
                <img src={Neptune} alt="neptune" />
              </div>
              <p className="size-planet-title">Neptune</p>
              <p className="miles">15,299 miles</p>
              <p className="kms">24,622 km</p>
              <span></span>
            </div>

            <div className="planet-size planet-size-moon planet-size-moon-neptune">
              <div className="moon-size">25%</div>
              <p className="size-planet-title">Earth's Moon</p>
              <p className="miles">2159 miles</p>
              <p className="kms">3475 km</p>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Size;
