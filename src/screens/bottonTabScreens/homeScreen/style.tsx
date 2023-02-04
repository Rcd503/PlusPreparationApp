import {black, redWhite, white, whiteRed} from '../../../themes/colors';
import {TextStyle, ViewStyle} from 'react-native';

const blankContainer: ViewStyle = {
  flex: 0.4,
  backgroundColor: redWhite,
};
const mainContainer: ViewStyle = {
  flex: 1,
  backgroundColor: whiteRed,
  justifyContent: 'center',
};
const buttonStyle: ViewStyle = {
  padding: 10,
  paddingStart: 30,
  borderBottomWidth: 0.5,
};
const textStyle: TextStyle = {
  fontSize: 18,
  color: black,
  fontWeight: 'bold',
  opacity: 0.7,
};
const styles = {
  blankContainer,
  mainContainer,
  buttonStyle,
  textStyle,
};
export default styles;
