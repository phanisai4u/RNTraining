import React, { Component } from 'react';
import { Provider } from "react-redux";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/Components/HomeScreen';
import { store } from './src/ReduxStore';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
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
