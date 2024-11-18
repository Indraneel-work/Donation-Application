import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

export const style = StyleSheet.create({
  scrollViewContainer: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  donationItemImage: {
    marginTop: verticalScale(12),
    marginBottom: horizontalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },
  badgeContainer: {
    marginBottom: verticalScale(16),
  },
  textDescription: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    marginBottom: verticalScale(10),
  },
  donateButtonContainer: {
    marginHorizontal: horizontalScale(20),
  },
});
