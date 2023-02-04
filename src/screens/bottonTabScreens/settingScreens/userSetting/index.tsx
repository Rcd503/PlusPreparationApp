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
import * as DeviceInfo from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
import {redWhite, white} from '../../../../themes/colors';
import {styleList} from './style';
const UserSetting = () => {
  const [name, SetName] = useState<string>('Demo Name');
  const [email, setEmail] = useState<string>('email@mail.com');
  const [phoneNumber, SetPhoneNumber] = useState<string>('1234567890');
  const [editeMode, SetEditeMode] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styleList.container}>
      <StatusBar animated={true} backgroundColor={redWhite} />
      <View style={styleList.blankContainer} />
      <View style={styleList.mainContainer}>
        <TouchableOpacity
          style={styleList.buttonStyle}
          onPress={() => navigation.navigate('User')}>
          <Text style={styleList.textStyle}>User Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleList.buttonStyle}
          onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styleList.textStyle}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleList.buttonStyle}>
          <Text style={styleList.textStyle}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      <View
        style={styleList.versionStyle}>
        <Text style={{color: 'grey', fontSize: 8}}>
          v{DeviceInfo?.getVersion()}
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserSetting;
