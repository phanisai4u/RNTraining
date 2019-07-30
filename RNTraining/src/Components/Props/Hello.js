import React from 'react';
import { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

export default class Hello extends Component {

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text>Hello {this.props.message}</Text>
            </View>
        )
    }
}