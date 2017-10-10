import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Header from './components/header.js';
import ToDoList from './components/toDoList.js';

const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const reducers = require('./reducers').default;

let store = createStore(reducers);

export default class App extends React.Component {
  render() {
    console.log(store);

    return (
      <View style={styles.container}>
        <Header />
        <Provider store={store}>
          <ToDoList />
        </Provider>
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
