import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigation from '../botomTabNavigation';
import AboutUs from '../../screens/bottonTabScreens/settingScreens/aboutUs';
import User from '../../screens/bottonTabScreens/settingScreens/user';
import Topic from '../../screens/bottonTabScreens/bookScreens/topic';
import Question from '../../screens/bottonTabScreens/bookScreens/question';
import {whiteRed} from '../../themes/colors';
import FavoriteQuestions from '../../screens/bottonTabScreens/homeScreen/favoriteQuestions';
const Stack = createStackNavigator();
const StackNavigation = () => (
  <Stack.Navigator
    initialRouteName="bottom"
    screenOptions={{
      headerStyle: {
        backgroundColor: whiteRed,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
      },
    }}>
    <Stack.Screen
      name="bottom"
      component={BottomTabNavigation}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Topic" component={Topic} />
    <Stack.Screen name="Question" component={Question} />
    <Stack.Screen name="User" component={User} />
    <Stack.Screen name="AboutUs" component={AboutUs} />
    <Stack.Screen name="Favorite Questions" component={FavoriteQuestions} />
  </Stack.Navigator>
);

export default StackNavigation;
