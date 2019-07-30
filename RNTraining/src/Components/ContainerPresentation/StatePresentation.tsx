import React, { Component } from 'react'; 
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity 
} from 'react-native'; 

interface AppProps {
  isPasswordHidden: boolean, 
  toggleText: string, 
  handleToggle: () => void
}

export default class App extends Component<AppProps> { 
  
  constructor(props: any) { 
        super(props); 
        this.state = { 
          isPasswordHidden: true, 
          toggleText: 'Show', 
        }; 
    } 
  
  render() { 
    return ( 
      <View style={styles.container}> 
        <TextInput 
          secureTextEntry={this.props.isPasswordHidden} 
          style={{ width: 400, height: 50, backgroundColor: '#212D3B', color: 'white' }} 
        /> 
        <TouchableOpacity 
          onPress={this.props.handleToggle} 
        > 
          <Text>{this.props.toggleText}</Text> 
        </TouchableOpacity> 
      </View> 
    ); 
  } 
} 
  
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  } 
}); 