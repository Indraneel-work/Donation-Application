import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Badge = props => {
  const [width, setWidth] = useState(0);
  const paddinHorizontal = 10;
  const tabWidth = {
    width: horizontalScale(paddinHorizontal * 2 + width),
  };
  return (
    <View
      disabled={props.isInactive}
      style={[style.badge, tabWidth]}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={style.title}>
        {props.title}
      </Text>
    </View>
  );
};

Badge.proptypes = {
  title: PropTypes.string.isRequired,
};

export default Badge;
