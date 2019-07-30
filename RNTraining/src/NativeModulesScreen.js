import React, { Component } from 'react';
import {
    View,
    Button,
    NativeModules
} from 'react-native';

export default class NativeModulesScreen extends Component {
    showActivityIndicator = () => {
        NativeModules.ProgressDialog.showProgressDialog("This is activity Indicator");

        setTimeout(()=>{
            NativeModules.ProgressDialog.dismissDialog();
        }, 10000);
    }
    render() {
        return (
            <View>
                <Button title={"Show Activity Indicator"} onPress={this.showActivityIndicator} />
            </View>
        )
    }
}
