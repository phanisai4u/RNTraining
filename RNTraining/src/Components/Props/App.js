import React from 'react';
import { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import Hello from './Hello';

//  In the example above we have a Heading component, with a message prop. 
// The parent class App sends the prop 'message' to the child component Hello.
// The parent class App sends the prop 'source' to the child component Image.

export default class App extends Component {
    render() {
        return (
            <View>
                <Hello message={'React native!'}/>
                <Image
                    source={{ uri: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png' }}
                    style={{
                        padding: 186, flex: 1, alignSelf:
                            'center', justifyContent: 'center', resizeMode: 'contain',
                    }} />
            </View>
        ); 
    }
} 