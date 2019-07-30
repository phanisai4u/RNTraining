import React, { Component } from 'react'; 
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity 
} from 'react-native'; 
import StatePresentation from "./StatePresentation";

interface AppProps {

}

interface AppState {
    password: string, 
    isPasswordHidden: boolean, 
    toggleText: string, 
}

export default class App extends Component<AppProps,AppState> { 
  
  constructor(props: any) { 
        super(props); 
        this.state = { 
          password: '', 
          isPasswordHidden: true, 
          toggleText: 'Show', 
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
     <StatePresentation 
        handleToggle={this.handleToggle} 
        isPasswordHidden={this.state.isPasswordHidden}
        toggleText={this.state.toggleText}/>
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