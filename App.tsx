/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/state/root.reducer';
import {NativeBaseProvider} from 'native-base';
import RootNavigator from './src/navigators/root.navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './src/shared/styles';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <NativeBaseProvider>
          <GestureHandlerRootView style={styles.container}>
            <RootNavigator />
          </GestureHandlerRootView>
        </NativeBaseProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
}

export default App;
