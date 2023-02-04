import React from 'react';
import {FlatList, SafeAreaView, StatusBar} from 'react-native';
import TopicCard from '../../../../components/molecules/topicCard';
import {redWhite} from '../../../../themes/colors';
import styles from './style';
import {DATA} from '../../../../../DemoJsoncopy';
import {useRoute} from '@react-navigation/native';

const Topic = () => {
  const {params} = useRoute<any>();
  const item = params?.data;
  console.log('data', item);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={redWhite} />
      <FlatList
        data={params?.data || []}
        renderItem={({item}) => <TopicCard item={item} />}
        keyExtractor={item => item.topic_name}
      />
    </SafeAreaView>
  );
};

export default Topic;
