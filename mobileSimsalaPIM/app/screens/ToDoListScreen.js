import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const ToDoListScreen = () => {
    return (
        <View>
            <Text>
                ToDO List
            </Text>
            <Text
                onPress={() => Actions.add()}
            >
                Open Modal
            </Text>
        </View>
    );
}

export default ToDoListScreen;