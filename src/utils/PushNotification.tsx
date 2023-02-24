import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFcmToken();
  }
}
const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmtoken');
  if (!fcmToken) {
    try {
      const fcmToken = await messaging()?.getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmtoken', fcmToken);
      }
    } catch (error) {
    }
  }
};
export const notificationServices = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    // navigation.navigate(remoteMessage.data.type);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      //   setLoading(false);
    });
  //Foreground service
  messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });
};
