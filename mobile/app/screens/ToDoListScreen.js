import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from '../components/common';
import { connect } from 'react-redux';
import { RoundButton } from '../components/common/RoundButton';
import Panel from 'react-native-panel';

class ToDoListScreen extends Component {
  renderHeader() {
    return (
      <View>
        <Text>{this.todo}</Text>
      </View>
    );
  }

  renderList() {
    const { todoList } = this.props;

    return todoList.map((todo, index) => (
      <Panel header={this.renderHeader} key={index}>
        <View>
          <CardSection>
            <Text>{todo.name}</Text>
            <Text>
              {todo.time.format('HH:mm')} - {todo.date.format('DD/MM/YY')}
            </Text>
            <View>
              <Button>Done</Button>
              <Button>Delete</Button>
            </View>
          </CardSection>
          <CardSection>
            <Text>{todo.info}</Text>
          </CardSection>
        </View>
      </Panel>
    ));
  }

  render() {
    const { cardContainer } = styles;
    return (
      <View style={cardContainer}>
        <ScrollView>{this.renderList()}</ScrollView>
        <RoundButton onPress={() => Actions.add()}>+</RoundButton>
      </View>
    );
  }
}

const styles = {
  cardContainer: {
    position: 'relative',
    flexDirection: 'column',
    flex: 1
  }
};

const mapStateToProps = ({ addReducer }) => {
  const { todoList } = addReducer;
  return { todoList };
};

export default connect(mapStateToProps)(ToDoListScreen);
