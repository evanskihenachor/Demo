import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screens/user/user.screen';
import {RootScreens} from './navigator.config';
import {UserDetailsScreen} from '../screens/user/userdetails.screen';
import {MapScreen} from '../screens/map/map.screen';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import FlashMessage from 'react-native-flash-message';
let unsubscribe: any;
const RootNavigator = () => {
  const Stack = createStackNavigator();
  const ref = React.useRef<FlashMessage>(null);

  const showFlashMessage = (message: string) => {
    setTimeout(() => {
      ref.current?.hideMessage();
    }, 5000);
    ref.current?.showMessage({
      message: message,
      type: 'info',
    });
  };
  useEffect(() => {
    unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      if (state.isConnected) {
        showFlashMessage('You are now connected to the internet. ');
      } else {
        showFlashMessage(
          'You are not connected to the internet. Please check your connection',
        );
      }
    });
  }, []);
  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={RootScreens.UserDetails}
          component={UserDetailsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={RootScreens.MapDetails}
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <FlashMessage ref={ref} position="top" />
    </>
  );
};

export default RootNavigator;
