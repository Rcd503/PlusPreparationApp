import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import * as DeviceInfo from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
import {redWhite} from '../../../../themes/colors';
import {styleList} from './style';
const UserSetting = () => {
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
        {/* <TouchableOpacity
          style={styleList.buttonStyle}
          onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styleList.textStyle}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleList.buttonStyle}>
          <Text style={styleList.textStyle}>Privacy Policy</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styleList.versionStyle}>
        <Text style={{color: 'grey', fontSize: 8}}>
          v{DeviceInfo?.getVersion()}
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserSetting;
