import React from 'react';
import { connect } from 'react-redux';
import { number } from 'prop-types';

import ava_1 from '../../assets/images/1.png';
import ava_2 from '../../assets/images/2.png';

import Avatar from '../UI/Avatar';
import chart from '../Canvas';

import { BobyStyle, Result } from './styled';

const Body = ({ Erd, Tru }) => {
  const ctx = document.getElementById('chart1');

  if (ctx) {
    chart(ctx, Erd, Tru);
  }

  return (
    <BobyStyle>
      <div>
        <Avatar avatar={ava_1} />
        <h2>Erdogan</h2>
        <Result>{Erd}%</Result>
      </div>
      <div>
        <canvas id="chart1" width="400" height="400" />
      </div>
      <div>
        <Avatar avatar={ava_2} />
        <h2>Trump</h2>
        <Result>{Tru}%</Result>
      </div>
    </BobyStyle>
  );
};

Body.propTypes = {
  Erd: number,
  Tru: number
};

const mapStateToProps = (state) => {
  return {
    Erd: state.Erdogan,
    Tru: state.Trump
  };
};

export default connect(
  mapStateToProps,
  {}
)(Body);
