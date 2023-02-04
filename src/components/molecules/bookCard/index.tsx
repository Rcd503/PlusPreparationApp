import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {boook_image} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

const BookCard = (props: any) => {
  console.log('Bookcard');

  const navigation = useNavigation<any>();
  const {item} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Topic', {data: item?.data})}>
      <Text style={styles.textStyle}>{item?.book_name}</Text>
      <Image style={styles.tinyLogo} source={{uri: boook_image}} />
    </TouchableOpacity>
  );
};

export default BookCard;
