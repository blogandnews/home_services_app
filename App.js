/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
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
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Button from './src/components/Button';



const renderPrivateViews = () => (
  <Stack.Screen name="Home" component={Home} options={{ headerShown: true  }} />
)

const renderPublicViews = () => (
  <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false  }} />
)

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const [isSigned, setIsSigned] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSigned ? renderPrivateViews() : renderPublicViews()}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
