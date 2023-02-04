import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import QuestionCard from '../../../../components/molecules/questionCard';
import {redWhite} from '../../../../themes/colors';
import styles from './style';
import {useRoute} from '@react-navigation/native';
import ScoreModal from '../../../../components/atoms/scoreModal';
import {Text} from 'react-native-paper';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../functions/hooks/reduxHooks';
import {unfavoriteAllQuestions} from '../../../../redux/favoriteQuestionSlice';

const FavoriteQuestions = () => {
  const dispatch = useAppDispatch();
  const [answerArray, setAnswerArray] = useState<any>([]);
  const [totalRightAnswer, setTotalRightAnswer] = useState<number>(0);
  const {favoriteQuestions} = useAppSelector(state => state.favorite);
  if (favoriteQuestions?.length === 0) {
    return (
      <SafeAreaView style={styles.noDataContainer}>
        <Text style={styles.noDataTextStyle}>No data found</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={redWhite} />
      <FlatList
        data={favoriteQuestions || []}
        renderItem={({item}) => (
          <QuestionCard
            item={item}
            answerArray={answerArray}
            setAnswerArray={setAnswerArray}
            totalRightAnswer={totalRightAnswer}
            setTotalRightAnswer={setTotalRightAnswer}
          />
        )}
        keyExtractor={item => item?.question_number}
        ListFooterComponentStyle={{flex: 1, justifyContent: 'flex-end'}}
        ListFooterComponent={() => (
          <TouchableOpacity
            onPress={() => {
              dispatch(unfavoriteAllQuestions());
            }}
            style={styles.submitBtnContainer}>
            <Text style={styles.btnTextStyle}>Unfavorite all questions</Text>
          </TouchableOpacity>
        )}
        onEndReachedThreshold={0}
      />
    </SafeAreaView>
  );
};

export default FavoriteQuestions;
