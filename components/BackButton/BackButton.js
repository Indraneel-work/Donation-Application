import React from 'react';
import style from './style';
import {Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const BackButton = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

BackButton.proptypes = {
  onPress: PropTypes.func,
};
export default BackButton;
