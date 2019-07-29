import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Button,
} from 'react-native';


export default class UserListScreen extends React.Component {
    static navigationOptions = {
        title: 'Users',
    };
    render() {
        const { navigate } = this.props.navigation;
        const {users} = this.props.users
        return (
                <View style={styles.container}>
                    <FlatList
                        data={users}
                        renderItem={({ item }) => <Button
                           title = {item.key}
                           style={styles.item}
                            onPress={() => navigate(item.key, {})}
                        /> }
                    />
                </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        alignContent: 'center',
    }
});
