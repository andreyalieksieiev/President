import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import Body from '../Body';
import Footer from '../Fotter';
import { addClickErdogan, addClickTrump } from '../../store/reducer';

const Wrapper = ({ addClickErdogan, addClickTrump }) => {
  const addVoiceErdogan = () => {
    addClickErdogan();
  };

  const addVoiceTrump = () => {
    addClickTrump();
  };

  return (
    <div>
      <Body />
      <Footer addVoiceErdogan={addVoiceErdogan} addVoiceTrump={addVoiceTrump} />
    </div>
  );
};

Wrapper.propTypes = {
  addClickErdogan: func.isRequired,
  addClickTrump: func.isRequired
};

export default connect(
  null,
  { addClickErdogan, addClickTrump }
)(Wrapper);
