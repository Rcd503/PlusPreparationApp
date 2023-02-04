import {View} from 'react-native';
import React from 'react';
import styles from './style';
import HomeCard from '../../../components/molecules/homeCard';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <HomeCard title={'Favorite Questions'} icon="heart-circle" route='Favorite Questions'/>
      <HomeCard title={'Set Test Alarm'} icon="alarm-check" />
      {/* <HomeCard title={'Set Alarm'} icon="alarm" /> */}
    </View>
  );
};

export default HomeScreen;
