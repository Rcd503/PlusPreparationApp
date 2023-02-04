import React, {useState} from 'react';
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

const Question = () => {
  const route = useRoute<any>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [answerArray, setAnswerArray] = useState<any>([]);
  const [totalRightAnswer, setTotalRightAnswer] = useState<number>(0);
  const submitAnswer = () => {
    setModalVisible(true);
    console.log('ANSWERARRAY', totalRightAnswer);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={redWhite} />
      <FlatList
        data={route?.params?.questions || []}
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
              submitAnswer();
            }}
            style={styles.submitBtnContainer}>
            <Text style={styles.btnTextStyle}>Submit</Text>
          </TouchableOpacity>
        )}
        onEndReachedThreshold={0}
      />
      {modalVisible && (
        <ScoreModal
          totalRightAnswer={answerArray?.length}
          totalQuestions={route?.params?.questions?.length}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </SafeAreaView>
  );
};

export default Question;
