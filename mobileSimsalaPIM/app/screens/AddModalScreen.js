import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const AddModalScreen = () => {
    return (
        <View>
            <Text
                onPress={() => Actions.pop()}
            >
                AddScreen
            </Text>
        </View>
    );
}

export default AddModalScreen;