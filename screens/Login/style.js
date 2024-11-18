import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: horizontalScale(24),
  },
  registrationButtonContainer: {
    alignItems: 'center',
  },
  errorMessage:{
    fontFamily:getFontFamily('Inter','500'),
    color:'#FF0000',
    fontSize:scaleFontSize(16),
    marginBottom:verticalScale(24),
  },
  successMessage:{
    fontFamily:getFontFamily('Inter','500'),
    color:'#28a745',
    fontSize:scaleFontSize(16),
    marginBottom:verticalScale(24),
  },
});
