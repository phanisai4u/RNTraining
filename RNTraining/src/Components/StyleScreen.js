import React, { Fragment } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { ViewStyle } from './Styles'

export default class StyleScreen extends React.Component {
    static navigationOptions = {
        title: 'Styles',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Fragment>
                <View style={styles.container}>
                    <View style={{ borderRadius: 5, borderWidth: 2, borderColor: 'blue', }}>
                        <Text>"I'm inline style"</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>"I'm in File style"</Text>
                    </View>
                    <View style={ViewStyle.type1}>
                        <Text>"I'm External style"</Text>
                    </View>
                </View>

            </Fragment>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22,
    },
    item: {
        fontSize: 18,
        height: 44,
        borderColor: 'red',
        borderWidth: 2,
        marginBottom:20,
        marginTop:50,
    }
});
