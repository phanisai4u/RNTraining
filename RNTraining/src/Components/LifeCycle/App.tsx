/*Example of Reac Native Life Cycle*/
import React, { Component } from 'react';
import { Text, View , TouchableOpacity} from 'react-native';


interface CustomComponentProps {
  name: string
}
interface CustomComponentState {
 
}

class CustomComponent extends Component<CustomComponentProps,CustomComponentState>  {
  constructor(props: CustomComponentProps, state: CustomComponentState) {
    super(props);
    console.log('Constructor Called.');
  }
 
  componentWillMount() {
    console.log('componentWillMount called.');
  }
 
  componentDidMount() {
    console.log('componentDidMount called.');
  }
 
  componentWillReceiveProps(nextProp: CustomComponentProps) {
    console.log('componentWillReceiveProps called.', nextProp);
  }
 
  shouldComponentUpdate(nextProp: CustomComponentProps, nextState: CustomComponentState) {
    console.log('shouldComponentUpdate called.');
    return true;
  }
 
  componentWillUpdate(nextProp: CustomComponentProps, nextState: CustomComponentState) {
    console.log('componentWillUpdate called.');
  }
 
  componentDidUpdate(prevProp: CustomComponentProps, prevState: CustomComponentState) {
    console.log('componentDidUpdate called.');
  }
 
  componentWillUnmount() {
    console.log('componentWillUnmount called.');
  }
 
  componentDidCatch(error: any, info: any) {
    console.log('componentDidCatch called.');
  }
 
  render() {
    console.log('render called');
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Language is: {this.props.name}</Text>
      </View>
    );
  }
}

interface AppProps {

}
interface AppState {
  name : string
}
 
export default class App extends Component<AppProps, AppState> {

  constructor(props: AppProps, state: AppState) {
    super(props);
    this.state = {
      name: 'C'
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
           <TouchableOpacity 
          onPress={() => {
              this.setState({name: 'Ruby'})
          }} style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}> 
          <Text>Change Name</Text> 
        </TouchableOpacity> 
       <CustomComponent name={this.state.name}/>
      </View>
    );
  }
}