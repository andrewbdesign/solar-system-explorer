import React, { Fragment } from 'react';
import Earth from '../../../assets/images/earth.svg';
import Saturn from '../../../assets/images/saturn.svg';

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
                <p>9,500%</p>
                <img src={Saturn} alt="saturn" />
              </div>
              <p className="size-planet-title">Saturn</p>
              <p className="miles">142,800 miles</p>
              <p className="kms">88,695 km</p>
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
