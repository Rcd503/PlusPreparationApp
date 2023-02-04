import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {lightBlue, lightGreen, redWhite} from '../../../themes/colors';
import RadioButtonCustom from '../../atoms/radioButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  addToFavoriteQuestionList,
  removeFromFavoriteQuestionList,
} from '../../../redux/favoriteQuestionSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../functions/hooks/reduxHooks';

const QuestionCard = (props: any) => {
  const {item, setAnswerArray, answerArray} = props;

  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const [checked1, setChecked1] = React.useState<boolean>(false);
  const [checked2, setChecked2] = React.useState<boolean>(false);
  const [checked3, setChecked3] = React.useState<boolean>(false);
  const [checked4, setChecked4] = React.useState<boolean>(false);
  const [showAnswer, setShowAnswer] = React.useState<boolean>(false);
  const [rightAnswer, setRightAnswer] = React.useState<string>('');
  const [showFavorite, setShowFavorite] = React.useState<boolean>(true);

  const setStatus = (status: number) => {
    if (status === 1) {
      if (item?.right_answer == 'A') {
        const find = answerArray?.find(
          (v: any) => v?.question_number === item?.question_number,
        );

        //find return undefined if number not existing
        if (!find) {
          setAnswerArray([
            ...answerArray,
            {question_number: item?.question_number, right_answer: 'A'},
          ]);
        } else {
          setAnswerArray([
            ...answerArray.filter(
              (item: any) => item?.question_number !== find?.question_number,
            ),
          ]);
        }
      } else {
        const find = answerArray?.find(
          (v: any) => v?.question_number === item?.question_number,
        );

        //find return undefined if number not existing
        if (find)
          setAnswerArray([
            ...answerArray.filter(
              (item: any) => item?.question_number !== find?.question_number,
            ),
          ]);
      }
      setChecked1(!checked1);
      setChecked2(false);
      setChecked3(false);
      setChecked4(false);
    } else if (status === 2) {
      if (item?.right_answer == 'B') {
        const find = answerArray?.find(
          (v: any) => v?.question_number === item?.question_number,
        );

        //find return undefined if number not existing
        if (!find) {
          setAnswerArray([
            ...answerArray,
            {question_number: item?.question_number, right_answer: 'B'},
          ]);
        } else {
          setAnswerArray([
            ...answerArray.filter(
              (item: any) => item?.question_number !== find?.question_number,
            ),
          ]);
        }
      } else {
        const find = answerArray?.find(
          (v: any) => v?.question_number === item?.question_number,
        );

        //find return undefined if number not existing
        if (find)
          setAnswerArray([
            ...answerArray.filter(
              (item: any) => item?.question_number !== find?.question_number,
            ),
          ]);
      }
      setChecked1(false);
      setChecked2(!checked2);
      setChecked3(false);
      setChecked4(false);
    } else if (status === 3) {
      if (item?.right_answer == 'C') {
        const find = answerArray?.find(
          (v: any) => v?.question_number === item?.question_number,
        );

        //find return undefined if number not existing
        if (!find) {
          setAnswerArray([
            ...answerArray,
            {question_number: item?.question_number, right_answer: 'C'},
          ]);
        } else {
          setAnswerArray([
            ...answerArray.filter(
              (item: any) => item?.question_number !== find?.question_number,
            ),
          ]);
        }
      } else {
        const find = answerArray?.find(
          (v: any) => v?.question_number === item?.question_number,
        );

        //find return undefined if number not existing
        if (find)
          setAnswerArray([
            ...answerArray.filter(
              (item: any) => item?.question_number !== find?.question_number,
            ),
          ]);
      }
      setChecked1(false);
      setChecked2(false);
      setChecked3(!checked3);
      setChecked4(false);
    } else if (status === 4) {
      if (item?.right_answer == 'D') {
        const find = answerArray?.find(
          (v: any) => v?.question_number === item?.question_number,
        );

        //find return undefined if number not existing
        if (!find) {
          setAnswerArray([
            ...answerArray,
            {question_number: item?.question_number, right_answer: 'D'},
          ]);
        } else {
          setAnswerArray([
            ...answerArray.filter(
              (item: any) => item?.question_number !== find?.question_number,
            ),
          ]);
        }
      } else {
        const find = answerArray?.find(
          (v: any) => v?.question_number === item?.question_number,
        );
        console.log('FIND', find);
        //find return undefined if number not existing
        if (find)
          setAnswerArray([
            ...answerArray.filter(
              (item: any) => item?.question_number !== find?.question_number,
            ),
          ]);
      }
      setChecked1(false);
      setChecked2(false);
      setChecked3(false);
      setChecked4(!checked4);
    }
  };
  const showAnswers = (ans: string) => {
    setShowAnswer(!showAnswer);
    setRightAnswer(ans);
  };
  const hideAnswers = () => {
    setShowAnswer(!showAnswer);
    setRightAnswer('');
  };
  const setToFavoriteList = () => {
    setShowFavorite(!showFavorite);
    dispatch(addToFavoriteQuestionList(item));
    console.log('item:', item);
  };
  const removeToFavoriteList = () => {
    setShowFavorite(!showFavorite);
    dispatch(removeFromFavoriteQuestionList(item));
    console.log('item:', item);
  };
  const {favoriteQuestions} = useAppSelector(state => state.favorite);
  useEffect(() => {
    console.log('favoriteQuestions::', favoriteQuestions);
    if (favoriteQuestions?.find(data => data?.question === item?.question)) {
      setShowFavorite(false);
    }
  }, [favoriteQuestions]);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {item?.question_number}). {item?.question}
      </Text>
      <View style={styles.buttonContainer}>
        <View
          style={[
            styles.buttonContainer1,
            rightAnswer === 'A'
              ? {backgroundColor: lightGreen, borderRadius: 15}
              : null,
          ]}>
          <RadioButtonCustom
            color={redWhite}
            status={checked1 ? 'checked' : 'unchecked'}
            onPress={() => setStatus(1)}
          />
          <Text style={styles.textStyleOptions}>{item?.option_a}</Text>
        </View>
        <View
          style={[
            styles.buttonContainer1,
            rightAnswer === 'B'
              ? {backgroundColor: lightGreen, borderRadius: 15}
              : null,
          ]}>
          <RadioButtonCustom
            color={redWhite}
            status={checked2 ? 'checked' : 'unchecked'}
            onPress={() => setStatus(2)}
          />
          <Text style={styles.textStyleOptions}>{item?.option_b}</Text>
        </View>
        <View
          style={[
            styles.buttonContainer1,
            rightAnswer === 'C'
              ? {backgroundColor: lightGreen, borderRadius: 15}
              : null,
          ]}>
          <RadioButtonCustom
            color={redWhite}
            status={checked3 ? 'checked' : 'unchecked'}
            onPress={() => setStatus(3)}
          />
          <Text style={styles.textStyleOptions}>{item?.option_c}</Text>
        </View>
        <View
          style={[
            styles.buttonContainer1,
            rightAnswer === 'D'
              ? {backgroundColor: lightGreen, borderRadius: 15}
              : null,
          ]}>
          <RadioButtonCustom
            color={redWhite}
            status={checked4 ? 'checked' : 'unchecked'}
            onPress={() => setStatus(4)}
          />
          <Text style={styles.textStyleOptions}>{item?.option_d}</Text>
        </View>
        <View style={styles.buttonContainerMain}>
          <TouchableOpacity
            style={styles.showAnswerButtonStyle}
            onPress={() => {
              showFavorite ? setToFavoriteList() : removeToFavoriteList();
            }}>
            <Text style={styles.buttonTextStyle}>
              {showFavorite
                ? 'Add to favorite list'
                : 'Remove from favorite list'}
            </Text>

            <MaterialCommunityIcons
              name={showFavorite ? 'heart-circle-outline' : 'heart-circle'}
              size={25}
              color={'#f5a29f'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.showAnswerButtonStyle}
            onPress={() => {
              showAnswer ? hideAnswers() : showAnswers(item?.right_answer);
            }}>
            <Text style={styles.buttonTextStyle}>
              {showAnswer ? 'Hide answer' : 'Show answer'}
            </Text>

            <MaterialCommunityIcons
              name={showAnswer ? 'eye-off' : 'eye'}
              size={25}
              color={'#f5a29f'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QuestionCard;
