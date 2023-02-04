import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';

const RadioButtonCustom = (props: any) => {
  const {color, status, onPress} = props;
  return (
    <RadioButton {...props} color={color} status={status} onPress={onPress} />
  );
};

export default RadioButtonCustom;

const styles = StyleSheet.create({});
