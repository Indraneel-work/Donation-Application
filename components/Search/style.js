import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginStart: horizontalScale(6),
    fontFamily: getFontFamily('Inter', '400'),
    lineHeight: scaleFontSize(14),
    fontSize: scaleFontSize(14),
    color: '#686C7A',
  },
  searchInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    marginTop: horizontalScale(10),
    alignItems: 'center',
    paddingVertical: verticalScale(20),
    borderRadius: horizontalScale(15),
    borderWidth: 1,
  },
});

export default style;
