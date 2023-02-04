import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Books, HomeScreen} from '../../screens/bottonTabScreens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {blackDark, redWhite, whiteRed} from '../../themes/colors';
import UserSetting from '../../screens/bottonTabScreens/settingScreens/userSetting';
const TabNav = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <TabNav.Navigator
      initialRouteName="Books"
      activeColor={whiteRed}
      inactiveColor={blackDark}
      barStyle={{backgroundColor: redWhite}}>
      <TabNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />
      <TabNav.Screen
        name="Books"
        component={Books}
        options={{
          tabBarLabel: 'Books',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="book-multiple"
              color={color}
              size={25}
            />
          ),
        }}
      />
      {/* <TabNav.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={25}
            />
          ),
        }}
      /> */}
      <TabNav.Screen
        name="UserSetting"
        component={UserSetting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" color={color} size={25} />
          ),
        }}
      />
    </TabNav.Navigator>
  );
};

export default BottomTabNavigation;
