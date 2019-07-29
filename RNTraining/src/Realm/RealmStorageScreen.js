import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Button,
    AsyncStorage
} from 'react-native';
import { saveTask, getTasks } from './RealmService';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class RealmStorageScreen extends Component {

    state = {
        task: '',
        taskList: []
    }

    componentDidMount() {
        let tasks = getTasks();
        this.setState({
            taskList : tasks
        })
    }

    onChangeText = (value) => {
        this.setState({
            task: value
        })
    }

    addTask = () => {
        saveTask({
            id: Math.random().toString(),
            title: this.state.task,
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date()
        });


        let tasks = getTasks();

        this.setState({
            task: '',
            taskList: tasks
        })
    }

    render() {
        const { taskList } = this.state;
        return (
            <View>
                <Text>TODO List</Text>
                <View style={{ margin: 10 }}>
                    <TextInput underlineColorAndroid="gray" placeholder={"Enter task to add to the list"} onChangeText={this.onChangeText} value={this.state.task} />
                    <Button onPress={this.addTask} title={"Add Task"} style={{ backgroundColor: 'blue' }} />
                </View>
                <FlatList
                    data={taskList}
                    renderItem={({ item }) => <View style={{ borderColor: 'gray', borderWidth: 1 }}><Text style={{margin:10}}>{item.title}</Text></View>}
                />
            </View>
        )
    }
}
