import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header.js';
import ToDoList from './components/toDoList.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ToDoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
