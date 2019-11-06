import React, { Fragment } from 'react';
import Earth from '../../../assets/images/earth.svg';
import Mars from '../../../assets/images/mars.svg';

const Size = () => {
  return (
    <Fragment>
      <h3>Size</h3>
      <p>Equatorial diameter</p>
      <div className="size">
        <div className="container">
          <div className="size__container">
            <div className="planet-size planet-size-earth">
              <div className="earth-size">
                <p>1</p>
                <img src={Earth} alt="earth" />
              </div>
              <p className="size-planet-title">Earth</p>
              <p className="miles">7926 miles</p>
              <p className="kms">12756 km</p>
              <span></span>
            </div>

            <div className="planet-size planet-size-mars">
              <div className="mars-size">
                <p>1/2</p>
                <img src={Mars} alt="mars" />
              </div>
              <p className="size-planet-title">Mars</p>
              <p className="miles">4220 miles</p>
              <p className="kms">6792 km</p>
              <span></span>
            </div>

            <div className="planet-size planet-size-moon">
              <div className="moon-size">1/4</div>
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
