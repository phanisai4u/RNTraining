import React, { Component } from 'react'; 
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity 
} from 'react-native'; 


export default class App extends Component { 
  
  constructor(props) { 
        super(props); 
        this.state = { 
          password: '', 
          isPasswordHidden: true, 
          toggleText: 'Show', 
          userName: ''
        }; 
    } 
  
    handleToggle = () => { 
    const { isPasswordHidden } = this.state; 
  
    if (isPasswordHidden) { 
      this.setState({ isPasswordHidden: false }); 
      this.setState({ toggleText: 'Hide' }); 
    } else { 
      this.setState({ isPasswordHidden: true }); 
      this.setState({ toggleText: 'Show' }); 
    } 
  }; 
  
  render() { 
    return ( 
      <View style={styles.container}> 
       

       <Text>{this.state.userName ? "Hello " + this.state.userName + " !" : undefined}</Text>
        <TextInput
          style={{ height: 50, backgroundColor: '#FFF' }} 
          onChangeText={(text) => { 
            this.setState({userName: text})
          }}
          placeholder={'UserName'}
          underlineColorAndroid="transparent"
        /> 
        <View style={{height: 3}}></View> 

        <TextInput 
          secureTextEntry={this.state.isPasswordHidden} 
          style={{ height: 50, backgroundColor: '#FFF' }} 
          placeholder={'Password'}
          underlineColorAndroid="transparent"
        /> 
        <TouchableOpacity 
          onPress={this.handleToggle}> 
          <Text>{this.state.toggleText}</Text> 
        </TouchableOpacity> 

      </View> 
    ); 
  } 
} 
  
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    paddingHorizontal: 20
  } 
}); 