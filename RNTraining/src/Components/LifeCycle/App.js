/*Example of Reac Native Life Cycle*/
import React, { Component } from 'react';
import { Text, View , TouchableOpacity} from 'react-native';

class CustomComponent extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor Called.');
  }
 
  componentWillMount() {
    console.log('componentWillMount called.');
  }
 
  componentDidMount() {
    console.log('componentDidMount called.');
  }
 
  componentWillReceiveProps(nextProp) {
    console.log('componentWillReceiveProps called.', nextProp);
  }
 
  shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate called.');
    return true;
  }
 
  componentWillUpdate(nextProp, nextState) {
    console.log('componentWillUpdate called.');
  }
 
  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate called.');
  }
 
  componentWillUnmount() {
    console.log('componentWillUnmount called.');
  }
 
  componentDidCatch(error, info) {
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

 
export default class App extends Component {

  constructor(props) {
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