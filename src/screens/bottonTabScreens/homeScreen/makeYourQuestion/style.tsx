import {StyleSheet} from 'react-native';
import {
  black,
  blackDark,
  redWhite,
  white,
  whiteRed,
} from '../../../../themes/colors';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', backgroundColor: whiteRed},
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: whiteRed,
  },
  subContainer: {
    flex: 1,
    // marginHorizontal: 18,
    backgroundColor: whiteRed,
  },
  btnContainer: {
    position: 'relative',
    width: 60,
    height: 60,
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    marginBottom: 10,
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  btnTextStyle: {
    // position: 'relative',
    // bottom: 0,
    // top: 0,
    alignSelf: 'flex-end',
  },
  noDataTextStyle: {
    flex: 1,
    margin: 10,
    fontSize: 20,
    color: blackDark,
  },
});

export default styles;
