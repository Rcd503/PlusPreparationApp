import {StyleSheet} from 'react-native';
import {black, redWhite} from '../../../themes/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f0f0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 18,
    marginHorizontal: 18,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 15,
    height: 150,
  },
  textStyle: {
    fontSize: 25,
    color: black,
  },
  tinyLogo: {margin: 10, width: 150, height: 150},
});

export default styles;
