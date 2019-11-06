import React from 'react';

const Year = () => {
  const planetYear = [
    {
      name: 'Earth',
      daysInYear: 365,
    },
    {
      name: 'Mars',
      daysInYear: 687,
    },
  ];

  const createDays = planet => {
    const planets = [];
    for (let i = 0; i < planet.daysInYear; i++) {
      planets[i] = <span key={i}></span>;
    }
    return planets;
  };
  return (
    <section className="year">
      <div className="container">
        <div className="year__container">
          <div>
            <h3>Earth: 365 days</h3>
            <div className="days-container earth-days">
              {createDays(planetYear[0])}
            </div>
          </div>
          <div>
            <h3>Mars: 687 days</h3>
            <div className="days-container mars-days">
              {createDays(planetYear[1])}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Year;
