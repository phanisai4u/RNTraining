/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/HomeScreen';
import AsyncStorageScreen from "./src/AsyncStorageScreen";
import RealmStorageScreen from "./src/Realm/RealmStorageScreen";
import UIAnimationsScreen from "./src/UIAnimationsScreen";
import NativeModulesScreen from "./src/NativeModulesScreen";
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  AsyncStorage: {screen: AsyncStorageScreen},
  RealmStorage: {screen:RealmStorageScreen},
  UIAnimations: {screen:UIAnimationsScreen},
  NativeModulesScreen: {screen:NativeModulesScreen}
});

const App = createAppContainer(MainNavigator);


export default App;
