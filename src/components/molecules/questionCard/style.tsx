import {StyleSheet} from 'react-native';
import {black, redWhite} from '../../../themes/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f0f0',
    flex: 1,
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
  },
  textStyle: {
    fontSize: 15,
    color: black,
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 10,
    borderWidth: 0.2,
    borderColor: redWhite,
    borderRadius: 10,
  },
  buttonContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  textStyleOptions: {
    flex: 1,
    fontSize: 15,
    color: black,
  },
  textStyleOptionsLabel: {
    fontSize: 15,
    color: black,
  },
  buttonContainerMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  showAnswerButtonStyle: {
    flex: 1,
    alignSelf: 'flex-end',
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonTextStyle: {
    fontSize: 10,
    color: black,
    textAlign: 'left',
  },
  showAnswerButtonStyle1: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  showAnswerTextStyle: {
    marginEnd: 25,
    fontSize: 20,
    color: black,
  },
});

export default styles;
