import React from 'react';
import { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

interface HelloProps {
    message : string
}

export default class Hello extends Component<HelloProps> {

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text>Hello {this.props.message}</Text>
            </View>
        )
    }
}