import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {black, lightGreen, redWhite, whiteRed} from '../../../themes/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ScoreModal = (props: any) => {
  const {modalVisible, setModalVisible, totalRightAnswer, totalQuestions} =
    props;
  console.log('totalRightAnswer', totalRightAnswer);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        style={styles.modalStyle}>
        <View style={styles.centeredView1}>
          <View style={styles.modalView}>
            <View style={styles.modalViewInner}>
              <View style={styles.closeButtonContainer}>
                <Pressable
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <MaterialCommunityIcons
                    name="close-circle-outline"
                    size={30}
                    color={'#f5a29f'}
                  />
                </Pressable>
              </View>
              <Text style={styles.scoreTextStyle}>Your Test Score is...</Text>
              <View style={styles.roundViewStyle}>
                <Text style={styles.scoreTesxStyle}>
                  <Text style={styles.scoreInnerTextStyle}>
                    {totalRightAnswer}
                  </Text>
                  <Text style={styles.scoreInnerSlashTextStyle}>/</Text>
                  {totalQuestions}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff100',
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
  centeredView1: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff90',
    paddingBottom: 10,
    borderWidth: 0.5,
    borderColor: redWhite,
  },
  modalView: {
    margin: 18,
    backgroundColor: whiteRed,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewInner: {
    borderWidth: 0.5,
    borderColor: redWhite,
    padding: 5,
    borderRadius: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  closeButtonContainer: {
    justifyContent: 'flex-start',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  roundViewStyleOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: redWhite,
    padding: 5,
  },
  roundViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreTesxStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: redWhite,
    paddingBottom: 10,
  },
  scoreTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: lightGreen,
    marginBottom: 20,
  },
  scoreInnerTextStyle: {
    color: lightGreen,
  },
  scoreInnerSlashTextStyle: {
    color: black,
  },
});

export default ScoreModal;
