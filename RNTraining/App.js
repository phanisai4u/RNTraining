import React, { Component } from 'react';
import { Provider } from "react-redux";
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
import { store } from './src/ReduxStore';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  AsyncStorage: {screen: AsyncStorageScreen},
  RealmStorage: {screen:RealmStorageScreen},
  UIAnimations: {screen:UIAnimationsScreen},
  NativeModulesScreen: {screen:NativeModulesScreen}
});

const AppContainer = createAppContainer(MainNavigator);

export  class App extends Component{

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
export default App;
