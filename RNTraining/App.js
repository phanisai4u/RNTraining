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
import HomeScreen from './src/Components/HomeScreen';
import AsyncStorageScreen from "./src/AsyncStorageScreen";
import RealmStorageScreen from "./src/Realm/RealmStorageScreen";
import UIAnimationsScreen from "./src/UIAnimationsScreen";
import NativeModulesScreen from "./src/NativeModulesScreen";
import { store } from './src/ReduxStore';
import WebApiScreen from './src/WebApiScreen';
import BasicComponentsPage from "./src/Components/BasicComponents/App";
import ComponentLifeCyclePage from "./src/Components/LifeCycle/App";
import PropsPage from "./src/Components/Props/App";
import StatePage from "./src/Components/State/App";
import ContainerPresentationPage from "./src/Components/ContainerPresentation/App";

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  BasicComponents : {screen: BasicComponentsPage},
  ComponentLifeCycle : { screen: ComponentLifeCyclePage},
  Props : { screen: PropsPage},
  State: { screen: StatePage},
  ContainerPresentation: {screen: ContainerPresentationPage},
  AsyncStorage: {screen: AsyncStorageScreen},
  RealmStorage: {screen:RealmStorageScreen},
  UIAnimations: {screen:UIAnimationsScreen},
  NativeModulesScreen: {screen:NativeModulesScreen},
  WebApis:{screen:WebApiScreen}
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
