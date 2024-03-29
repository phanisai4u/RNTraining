import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Button,
} from 'react-native';

const topicList = [
    {key: 'BasicComponents'},
    {key: 'Styles'},
    {key: 'FlexBox'},
    {key: 'List'},
    {key:'SectionList'},
    {key: 'Redux'},
    {key: 'WebApis'},
    {key: 'AsyncStorage'},
    {key: 'RealmStorage'},
    {key: 'NativeModulesScreen'},
    {key: 'ComponentLifeCycle'},
    {key: 'Props'},
    {key: 'State'}
  ]
  
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Fragment>
                <View style={styles.container}>
                    <FlatList
                        data={topicList}
                        renderItem={({ item }) => <Button
                           title = {item.key}
                           style={styles.item}
                            onPress={() => navigate(item.key, {})}
                        /> }
                    />
                </View>

            </Fragment>

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
