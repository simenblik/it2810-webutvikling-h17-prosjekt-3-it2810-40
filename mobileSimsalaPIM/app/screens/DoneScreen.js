import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const DoneScreen = () => {
    return (
        <View>
            <Text>
                Done List
            </Text>
            <Text
                onPress={() => Actions.add()}
            >
                Open Modal
            </Text>
        </View>
    );
}



export default DoneScreen;