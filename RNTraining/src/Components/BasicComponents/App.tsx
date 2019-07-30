import React from 'react';
import { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';

interface AppProps {

}

interface AppState {

}

export default class App extends Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
    }

    render() {
        const lockIcon = require("./lock.png");
        const personIcon = require("./person.png");

        return (
            <View style={styles.container}>
                <View style={styles.container} />
                <View style={styles.wrapper}>
                    <View style={styles.inputWrap}>
                        <View style={styles.iconWrap}>
                            <Image
                                source={personIcon}
                                style={styles.icon}
                                resizeMode="contain"
                            />
                        </View>
                        <TextInput
                            placeholder="Username"  
                            style={styles.input}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.inputWrap}>
                        <View style={styles.iconWrap}>
                            <Image
                                source={lockIcon}
                                style={styles.icon}
                                resizeMode="contain"
                            />
                        </View>
                        <TextInput
                            placeholder="Password"
                            secureTextEntry
                            style={styles.input}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <TouchableOpacity activeOpacity={.5} onPress={()=> Alert.alert("Sign In", "Sign in button pressed")}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.5}>
                        <View>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                {/* <Image
                    style={{ width: 66, height: 58 }}
                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
                /> */}

                {/* <Image 
                    source={{uri: 'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png'}} 
                    style={{width: 300, height: 300}}
                /> */}
                
                {/* <Button onPress={()=> {}} title={'Remember Me'}/> */}
                
                <View style={styles.container} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: undefined,
        height: undefined
    },
    wrapper: {
        paddingHorizontal: 15,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        backgroundColor: "transparent"
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFF'
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d73352"
    },
    icon: {
        width: 20,
        height: 20,
    },
    button: {
        backgroundColor: "#d73352",
        paddingVertical: 15,
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18
    },
    forgotPasswordText: {
        backgroundColor: "transparent",
        textAlign: "center"
    }
});