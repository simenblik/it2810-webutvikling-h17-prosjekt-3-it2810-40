import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from '../components/common';
import { connect } from 'react-redux';
import { RoundButton } from '../components/common/RoundButton';

class ToDoListScreen extends Component {
  renderList() {
    const { todoList } = this.props;

    return todoList.map((todo, index) => (
      <Panel header={todo.name} key={index}>
        <CardSection>
          <Text>{todo.name}</Text>
          <Text>
            {' '}
            {todo.time} - {todo.date}
          </Text>
          <View>
            <Button>Done</Button>
            <Button>Delete</Button>
          </View>
        </CardSection>
        <CardSection>
          <Text>{todo.info}</Text>
        </CardSection>
      </Panel>
    ));
  }

  render() {
    const { cardContainer } = styles;
    return (
      <View style={cardContainer}>
        {this.renderList()}
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

const mapStateToProps = ({ AddReducer }) => {
  const { todoList } = AddReducer;
  return { todoList };
};

export default connect(mapStateToProps)(ToDoListScreen);
