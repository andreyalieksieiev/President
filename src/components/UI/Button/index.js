import React from 'react';
import { func } from 'prop-types';

import { Butt } from './styled';

const Button = ({ clicked }) => <Butt onClick={clicked}>Click</Butt>;

Button.propTypes = {
  clicked: func.isRequired
};

export default Button;
