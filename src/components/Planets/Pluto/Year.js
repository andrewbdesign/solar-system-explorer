import React from 'react';

const Year = () => {
  const planetYear = [
    {
      name: 'Earth',
      daysInYear: 365 / 365,
    },
    {
      name: 'Pluto',
      daysInYear: Math.ceil(90520 / 365),
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
            <h3>
              {planetYear[0].name}: {planetYear[0].daysInYear} year
            </h3>
            <div className="days-container earth-days">
              {createDays(planetYear[0])}
            </div>
          </div>
          <div>
            <h3>
              {planetYear[1].name}: {planetYear[1].daysInYear} years
            </h3>
            <div className="days-container pluto-days">
              {createDays(planetYear[1])}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Year;
