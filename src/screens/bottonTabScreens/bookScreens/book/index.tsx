import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StatusBar, Text} from 'react-native';
import BookCard from '../../../../components/molecules/bookCard';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../functions/hooks/reduxHooks';
import {fetchBooks, STATUSES} from '../../../../redux/bookSlice';
import {redWhite} from '../../../../themes/colors';
import styles from './style';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {useNetInfo} from '@react-native-community/netinfo';

const Books = () => {
  const netInfo = useNetInfo();

  const [token, setToken] = useState<any>('');
  const dispatch = useAppDispatch();
  const {books: BOOKDATA, status} = useAppSelector(state => state.book);
  useEffect(() => {
    if (netInfo.isConnected) dispatch(fetchBooks());
  }, []);

  if (status === STATUSES.LOADING) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator animating={true} color={redWhite} size={40} />
      </SafeAreaView>
    );
  }
  console.log('BOOKDATA::', BOOKDATA);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={redWhite} />
      <FlatList
        data={BOOKDATA ?? []}
        renderItem={({item}) => <BookCard item={item} />}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

export default Books;
