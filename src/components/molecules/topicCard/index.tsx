import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const TopicCard = (props: any) => {
  const {item} = props;
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Question', {questions: item?.topic_questions})
      }>
      <Text style={styles.textStyle}>{item?.topic_name}</Text>
    </TouchableOpacity>
  );
};

export default TopicCard;
