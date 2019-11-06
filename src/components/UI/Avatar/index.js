import React from 'react';
import { string } from 'prop-types';

import { Ava } from './styled';

const Avatar = ({ avatar }) => (
  <Ava>
    <img src={avatar} alt="#" />
  </Ava>
);

Avatar.propTypes = {
  avatar: string
};

export default Avatar;
