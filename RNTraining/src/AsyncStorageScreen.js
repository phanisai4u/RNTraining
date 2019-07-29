import React, { Component } from 'react';
import {
    View,
    Button,
    AsyncStorage,
    TextInput
} from 'react-native';


export default class AsyncStorageScreen extends Component {

    state = {
        userId: ''
    }
    /**
     * Life cycle method which will be called after the component mounted
     */
    async componentDidMount() {
        let userIdValue = '';
        try {
            userIdValue = await AsyncStorage.getItem('userId') || '';
            this.setState({
                userId: userIdValue
            })
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    /**
     * Function to save the user Id into the AsyncStorage
     */
    saveUserId = async () => {
        try {
            await AsyncStorage.setItem('userId', this.state.userId);
            this.setState({
                userId: ''
            });
            alert("UserId saved successfully");

        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    /**
     * Function to delete the user Id into the AsyncStorage
     */
    deleteUserId = async () => {
        try {
            await AsyncStorage.removeItem('userId');
            alert("UserId deleted successfully");
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    onChangeText = (value) => {
        this.setState({
            userId: value
        })
    }

    render() {
        return (
            <View style={{ margin: 10 }}>
                <TextInput underlineColorAndroid='gray' placeholder="Enter your userid" value={this.state.userId} onChangeText={this.onChangeText}></TextInput>
                <Button title={"Save UserId"} onPress={this.saveUserId} />
                <View style={{height:5}}></View>
                <Button style={{ marginTop: 10 }} title={"Delete UserId"} onPress={this.deleteUserId} />
            </View>
        )
    }
}
