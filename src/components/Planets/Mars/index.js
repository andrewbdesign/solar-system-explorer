import React, { Fragment } from 'react';
import Size from './Size';
import Year from './Year';
import Distance from './Distance';

const Index = () => {
  return (
    <Fragment>
      <section className="red-planet-info">
        <div className="container">
          <h2 className="title-info">MARS</h2>
        </div>
        <Size />
        <Year />
        <Distance />
      </section>
    </Fragment>
  );
};

export default Index;
