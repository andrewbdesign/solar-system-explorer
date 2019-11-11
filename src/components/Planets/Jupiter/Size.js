import React, { Fragment } from 'react';
import Earth from '../../../assets/images/earth.svg';
import Jupiter from '../../../assets/images/jupiter.svg';

const Size = () => {
  return (
    <Fragment>
      <h3>Size</h3>
      <p>Equatorial diameter</p>
      <div className="size">
        <div className="container">
          <div className="size__container">
            <div className="planet-size planet-size-earth planet-size-earth-jupiter">
              <div className="earth-size">
                <p>100%</p>
                <img src={Earth} alt="earth" />
              </div>
              <p className="size-planet-title">Earth</p>
              <p className="miles">7,926 miles</p>
              <p className="kms">12,756 km</p>
              <span></span>
            </div>

            <div className="planet-size planet-size-jupiter">
              <div className="jupiter-size">
                <p>11,000%</p>
                <img src={Jupiter} alt="jupiter" />
              </div>
              <p className="size-planet-title">Jupiter</p>
              <p className="miles">142,800 miles</p>
              <p className="kms">88,695 km</p>
              <span></span>
            </div>

            <div className="planet-size planet-size-moon planet-size-moon-jupiter">
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
