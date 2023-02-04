/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {
  useCallback,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StackNavigation from './src/navigations/stackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {
  notificationServices,
  requestUserPermission,
} from './src/utils/PushNotification';
import {store, persistor} from './src/redux/store';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Netinfo from '@react-native-community/netinfo';
import {blackDark, warning, whiteRed} from './src/themes/colors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [netConnected, setNetConnected] = useState(true);
  const netSubscription = useCallback(
    () =>
      Netinfo.addEventListener(state => {
        setNetConnected(state.isConnected === true ? true : false);
      }),
    [],
  );
  useEffect(() => {
    //   setTimeout(() => {
    //     SplashScreen.hide();
    //   }, 3000);
    netSubscription();
  }, []);
  useEffect(() => {
    // requestUserPermission();
    // notificationServices();
  }, []);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
            <StackNavigation />
            {!netConnected && (
              <SafeAreaView>
                <View
                  style={{
                    height: 40,
                    backgroundColor: warning,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Text
                    style={{color: blackDark, textAlign: 'center'}}>
                    Please check your network connection!
                  </Text>
                </View>
              </SafeAreaView>
            )}
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

const AppMain = () => <App />;
export default AppMain;
