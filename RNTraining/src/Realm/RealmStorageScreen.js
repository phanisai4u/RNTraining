import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Button,
    TouchableOpacity,
    TextInput,
    Image,
    AsyncStorage
} from 'react-native';
import { saveTask, getTasks, updateTask, deleteTask } from './RealmService';

export default class RealmStorageScreen extends Component {

    state = {
        task: '',
        taskList: [],
        buttonText: 'Add Task',
        selectedTask: null
    }

    componentDidMount() {
        let tasks = getTasks();
        this.setState({
            taskList: tasks
        })
    }

    onChangeText = (value) => {
        this.setState({
            task: value
        })
    }

    addTask = (item) => {

        if (this.state.buttonText == "Add Task") {
            saveTask({
                id: Math.random().toString(),
                title: this.state.task,
                completed: false,
                createdAt: new Date(),
                updatedAt: new Date()
            });

        } else {
            let taskToUpdate = JSON.parse(JSON.stringify(this.state.selectedTask));
            taskToUpdate.title = this.state.task;
            taskToUpdate.updatedAt = new Date();
            updateTask(taskToUpdate);

        }


        let tasks = getTasks();
        console.log("tasks after add/Update::", tasks);
        this.setState({
            task: '',
            taskList: tasks
        })
    }

    taskSelected = (item) => {
        this.setState({
            task: item.title,
            selectedTask: item,
            buttonText: 'Update Task'
        })
    }

    deleteClicked = (item) => {
        deleteTask(item);
        let tasks = getTasks();
        console.log("tasks after add/Update::", tasks);
        this.setState({
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
                    <Button onPress={this.addTask} title={this.state.buttonText} style={{ backgroundColor: 'blue' }} />
                </View>
                <FlatList
                    data={taskList}
                    renderItem={({ item }) =>
                        <View style={{ borderColor: 'gray', borderWidth: 1, flexDirection: 'row', flex: 1 }}>
                            <TouchableOpacity onPress={() => { this.taskSelected(item) }} style={{ flex: 0.9 }}>
                                <Text style={{ margin: 10 }}>{item.title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.deleteClicked(item) }} style={{ flex: 0.1, alignContent: 'center' }}>
                                <Image source={require('../images/remove.png')} style={{ height: 20, width: 20, marginTop: 10 }} />
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        )
    }
}
