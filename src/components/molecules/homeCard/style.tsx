import {StyleSheet} from 'react-native';
import {black, whiteRed} from '../../../themes/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteRed,
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    padding: 20,
    elevation: 18,
    marginHorizontal: 18,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 15,
  },
  textStyle: {
    marginLeft: 30,
    fontSize: 18,
    color: black,
    fontWeight: 'bold',
    opacity: 0.7,
  },
  tinyLogo: {margin: 10, width: 150, height: 150},
});

export default styles;
