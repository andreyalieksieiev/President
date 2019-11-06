import React from 'react';
import { func } from 'prop-types';

import Button from '../UI/Button';
import { Block } from './styled';

const Footer = ({ addVoiceErdogan, addVoiceTrump }) => (
  <Block>
    <Button clicked={addVoiceErdogan} />
    <Button clicked={addVoiceTrump} />
  </Block>
);

Footer.propTypes = {
  addVoiceErdogan: func.isRequired,
  addVoiceTrump: func.isRequired
};

export default Footer;
