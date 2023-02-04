import {black, redWhite, white, whiteRed} from '../../../../themes/colors';
import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';

const blankContainer: ViewStyle = {
  flex: 0.4,
  backgroundColor: redWhite,
};
const mainContainer: ViewStyle = {
  flex: 1,
  backgroundColor: whiteRed,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingTop: 80,
  paddingHorizontal: 16,
};
const buttonStyle: ViewStyle = {
  padding: 10,
  paddingStart: 30,
  borderBottomWidth: 0.5,
};
const versionStyle: ViewStyle = {
  flex: 0.1,
  justifyContent: 'flex-end',
  backgroundColor: whiteRed,
  alignItems: 'flex-end',
  paddingBottom: 10,
  paddingRight: 20,
};
const textStyle: TextStyle = {
  fontSize: 18,
  color: black,
  fontWeight: 'bold',
  opacity: 0.7,
};
const container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: redWhite,
};
export const styleList = {
  container,
  blankContainer,
  mainContainer,
  buttonStyle,
  textStyle,
  versionStyle,
};
