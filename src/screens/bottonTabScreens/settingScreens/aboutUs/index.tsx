import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons/Icon';
import {redWhite} from '../../../../themes/colors';
import styles from './style';
const AboutUs = () => {
  const [name, SetName] = useState<string>('Demo Name');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <StatusBar animated={true} backgroundColor={redWhite} />

      <Text style={styles.textBtnLabelStyle}>Update Data</Text>
    </KeyboardAvoidingView>
  );
};

export default AboutUs;
