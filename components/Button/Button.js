import PropTypes from 'prop-types';
import React from 'react';
import {Pressable} from 'react-native';
import {Text} from 'react-native';
import style from './style';

const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[style.button, props.isDisabled && style.buttonDisabled ]}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

Button.default = {
  isDisabled: false,
};

Button.proptypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

export default Button;
