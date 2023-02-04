import {black, redWhite, white} from '../../../../themes/colors';
import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';

type Style = {
  container: ViewStyle;
  editeContainerr: ViewStyle;
  textContainer: ViewStyle;
  textInputContainer: ViewStyle;
  textInputContainer1: ViewStyle;
  updateBtncontainer: ViewStyle;
  title: TextStyle;
  textStyle: TextStyle;
  textInputStyle: TextStyle;
  textLabelStyle: TextStyle;
  textLabelStyle1: TextStyle;
  textBtnLabelStyle: TextStyle;
  icon: ImageStyle;
};
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    padding: 18,
    justifyContent: 'center',
  },
  editeContainerr: {
    padding: 18,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: redWhite,
    borderRadius: 10,
    marginVertical: 5,
    padding: 15,
  },
  textInputContainer1: {
    flex: 1,
    height: 50,
  },
  textStyle: {
    fontSize: 25,
    color: black,
  },
  textInputStyle: {
    color: black,
    height: 50,
    marginBottom: 10,
  },
  textLabelStyle1: {
    flex: 1,
    fontSize: 15,
    color: black,
  },
  textLabelStyle: {
    fontSize: 15,
    color: black,
    opacity: 0.5,
  },
  textBtnLabelStyle: {
    fontSize: 20,
    color: white,
  },
  updateBtncontainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: redWhite,
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 18,
  },
});

export default styles;
