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
const User = () => {
  const [name, SetName] = useState<string>('Demo Name');
  const [email, setEmail] = useState<string>('email@mail.com');
  const [phoneNumber, SetPhoneNumber] = useState<string>('1234567890');
  const [editeMode, SetEditeMode] = useState<boolean>(false);

  const editeModeView = () => (
    <View style={styles.textInputContainer}>
      <TextInput
        mode="outlined"
        label="Name"
        placeholder="Enter name"
        style={styles.textInputStyle}
        value={name}
        onChangeText={SetName}
        keyboardType="default"
        maxLength={15}
      />
      <TextInput
        mode="outlined"
        label="Email Id"
        placeholder="Enter email"
        style={styles.textInputStyle}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        mode="outlined"
        label="Phone number"
        placeholder="Enter phone number"
        style={styles.textInputStyle}
        value={phoneNumber}
        onChangeText={SetPhoneNumber}
        keyboardType="decimal-pad"
        maxLength={10}
      />
    </View>
  );
  const textView = () => (
    <View style={[styles.textInputContainer]}>
      <View style={styles.textContainer}>
        <Text style={styles.textLabelStyle}>Name :</Text>
        <Text style={styles.textLabelStyle1}> {name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textLabelStyle}>Email :</Text>
        <Text style={styles.textLabelStyle1}> {email}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textLabelStyle}>Phone No. :</Text>
        <Text style={styles.textLabelStyle1}> {phoneNumber}</Text>
      </View>
    </View>
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <StatusBar animated={true} backgroundColor={redWhite} />
      {editeMode && editeModeView()}
      {!editeMode && textView()}
      <TouchableOpacity
        style={styles.updateBtncontainer}
        onPress={() => SetEditeMode(!editeMode)}>
        {editeMode ? (
          <Text style={styles.textBtnLabelStyle}>Save Data</Text>
        ) : (
          <Text style={styles.textBtnLabelStyle}>Update Data</Text>
        )}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default User;
