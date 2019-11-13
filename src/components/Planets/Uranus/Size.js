import React, { Fragment } from 'react';
import Earth from '../../../assets/images/earth.svg';
import Uranus from '../../../assets/images/uranus.svg';

const Size = () => {
  return (
    <Fragment>
      <h3>Size</h3>
      <p>Equatorial diameter</p>
      <div className="size">
        <div className="container">
          <div className="size__container">
            <div className="planet-size planet-size-earth planet-size-earth-saturn">
              <div className="earth-size">
                <p>100%</p>
                <img src={Earth} alt="earth" />
              </div>
              <p className="size-planet-title">Earth</p>
              <p className="miles">7,926 miles</p>
              <p className="kms">12,756 km</p>
              <span></span>
            </div>

            <div className="planet-size planet-size-saturn">
              <div className="saturn-size">
                <p>14,500%</p>
                <img src={Uranus} alt="saturn" />
              </div>
              <p className="size-planet-title">Uranus</p>
              <p className="miles">31,765 miles</p>
              <p className="kms">51,118 km</p>
              <span></span>
            </div>

            <div className="planet-size planet-size-moon planet-size-moon-saturn">
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
