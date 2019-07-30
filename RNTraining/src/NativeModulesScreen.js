import React, { Component } from 'react';
import {
    View,
    Button,
    NativeModules,
    ActivityIndicator
} from 'react-native';

export default class NativeModulesScreen extends Component {

    state = {
        animating: true
    }

    showActivityIndicator = () => {
        NativeModules.ProgressDialog.showProgressDialog("This is activity Indicator");

        setTimeout(() => {
            NativeModules.ProgressDialog.dismissDialog();
        }, 10000);
    }

    showLocalActivityIndicator = () => {
        console.log("Inside showLocalActivityIndicator")
        this.setState({
            animating: true
        });

        setTimeout(() => {
            this.setState({
                animating: false
            });
        }, 10000);
    }
    render() {
        console.log("Inside Render",this.state.animating);
        const animating = this.state.animating;
        return (
            <View>
                <ActivityIndicator animating={animating} color='#bc2b78' size="large" />
                <Button title={"Show RN Activity Indicator"} onPress={this.showLocalActivityIndicator} />
                <View style={{ height: 5 }} />
                <Button title={"Show Activity Indicator from Native Modules"} onPress={this.showActivityIndicator} />
            </View>
        )
    }
}
