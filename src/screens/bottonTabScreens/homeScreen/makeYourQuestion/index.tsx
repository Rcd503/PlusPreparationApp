import React, {useState} from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {redWhite, whiteRed} from '../../../../themes/colors';
import styles from './style';
import {Text} from 'react-native-paper';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../functions/hooks/reduxHooks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import QuestionCard from '../../../../components/molecules/questionCard';

const MakeYourQuestion = () => {
  const dispatch = useAppDispatch();
  const [answerArray, setAnswerArray] = useState<any>([]);
  const [totalRightAnswer, setTotalRightAnswer] = useState<number>(0);
  const {favoriteQuestions} = useAppSelector(state => state.favorite);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={redWhite} />
      <View style={styles.subContainer}>
        <FlatList
          style={styles.subContainer}
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
          onEndReachedThreshold={0}
        />
      </View>
      <TouchableOpacity style={styles.btnContainer}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={55}
          color={'#f5a29f'}
          style={styles.btnTextStyle}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MakeYourQuestion;
