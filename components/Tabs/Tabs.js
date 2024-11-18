import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import {Pressable} from 'react-native';
import {Text} from 'react-native';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Tabs = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddinHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddinHorizontal * 2 + width),
  };
  return (
    <Pressable
      style={[style.tab, props.isInactive && style.inactiveTab, tabWidth]} onPress={() => props.onPress(props.tabId)}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={[style.title, props.isInactive && style.inactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Tabs.default = {
  isInactive: false,
  onPress: () => {},
};

Tabs.proptypes = {
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
  tabId : PropTypes.number.isRequired,
};

export default Tabs;
