import React, { Fragment } from 'react';
import Size from './Size';
import Year from './Year';
import Distance from './Distance';
import Speed from './Speed';
import Gravity from './Gravity';

const Index = () => {
  return (
    <Fragment>
      <section className="red-planet-info">
        <div className="container">
          <h2 className="title-info">NEPTUNE</h2>
        </div>
        <Size />
        <Year />
        <Distance />
        <Speed />
        <Gravity />
      </section>
    </Fragment>
  );
};

export default Index;
