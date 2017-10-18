import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import ToDoListScreen from './screens/ToDoListScreen';
import DoneScreen from './screens/DoneScreen';
import AddModalScreen from './screens/AddModalScreen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

let store = createStore(reducers);

// Simple component to render something in place of icon
/*const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{color: selected ? 'red' :'black'}}>{title+'try'}</Text>
    );
}
*/
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{
              backgroundColor: '#FFFFFF'
            }}
          >
            {/* Tab To-do list */}
            <Scene key="todolisttab" title="To-do list" /*icon={TabIcon}*/>
              <Scene key="todolist" component={ToDoListScreen} />
            </Scene>

            {/* Tab Done */}
            <Scene key="donetab" title="Done" /*icon={TabIcon}*/>
              <Scene key="done" component={DoneScreen} />
            </Scene>
          </Scene>

          <Scene
            key="add"
            direction="vertical"
            component={AddModalScreen}
            title="Add"
            hideNavBar
          />
        </Scene>
      </Router>
    </Provider>
  );
};

export default App;
