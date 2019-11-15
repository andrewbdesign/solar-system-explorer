import React, { Fragment } from 'react';
import Earth from '../../../assets/images/earth.svg';
import Pluto from '../../../assets/images/pluto.svg';

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
                <p>100%</p>
                <img src={Earth} alt="earth" />
              </div>
              <p className="size-planet-title">Earth</p>
              <p className="miles">7926 miles</p>
              <p className="kms">12756 km</p>
              <span></span>
            </div>

            <div className="planet-size planet-size-pluto">
              <div className="pluto-size">
                <p>16%</p>
                <img src={Pluto} alt="pluto" />
              </div>
              <p className="size-planet-title">Pluto</p>
              <p className="miles">1,430 miles</p>
              <p className="kms">2,302 km</p>
              <span></span>
            </div>

            <div className="planet-size planet-size-moon">
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
