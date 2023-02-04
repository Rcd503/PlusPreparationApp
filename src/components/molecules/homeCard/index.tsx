import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const HomeCard = (props: any) => {
  const navigation = useNavigation<any>();
  const {title, icon, route} = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        route && navigation.navigate(route);
      }}>
      <MaterialCommunityIcons name={icon} size={40} color={'#f5a29f'} />
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default HomeCard;
