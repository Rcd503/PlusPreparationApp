import {StyleSheet} from 'react-native';
import {
  black,
  blackDark,
  redWhite,
  white,
  whiteRed,
} from '../../../../themes/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: whiteRed,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: whiteRed,
  },
  submitBtnContainer: {
    flex: 1,
    backgroundColor: redWhite,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 18,
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
  btnTextStyle: {
    flex: 1,
    color: white,
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  noDataTextStyle: {
    flex: 1,
    margin: 10,
    fontSize: 20,
    color: blackDark,
  },
});

export default styles;
