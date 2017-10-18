import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from '../components/common';
import { connect } from 'react-redux';
import { RoundButton } from '../components/common/RoundButton';
import Panel from 'react-native-panel';

class ToDoListScreen extends Component {
  renderList() {
    const { todoList } = this.props;

    return todoList.map((todo, index) => (
      <Panel header={todo.name} key={index} style={styles.paneStyle}>
        <View>
          <View style={styles.sectionStyle}>
            <Text style={styles.textTimeDate}>
              ( {todo.time} - {todo.date} )
            </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text style={styles.textInfo}>{todo.info}</Text>
          </View>
          <View style={styles.buttonSection}>
            <Button style={styles.buttonStyle} styleText={styles.buttonText}>
              Done
            </Button>
            <Button style={styles.buttonStyle} styleText={styles.buttonText}>
              Delete
            </Button>
          </View>
        </View>
      </Panel>
    ));
  }

  render() {
    return (
      <View style={styles.cardContainer}>
        <ScrollView>{this.renderList()}</ScrollView>
        <RoundButton onPress={() => Actions.add()}>+</RoundButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    flexDirection: 'column',
    flex: 1
  },

  paneStyle: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },

  sectionStyle: {
    marginRight: 10
  },

  buttonSection: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    height: 35
  },

  buttonStyle: {
    backgroundColor: '#2196F3',
    elevation: 2,
    width: '100%'
  },

  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },

  textTimeDate: {
    padding: 5,
    color: '#2a2f43',
    alignSelf: 'center',
    fontStyle: 'italic'
  },
  textInfo: {
    padding: 5,
    color: '#2a2f43'
  }
});

const mapStateToProps = ({ AddReducer }) => {
  const { todoList } = AddReducer;
  return { todoList };
};

export default connect(mapStateToProps)(ToDoListScreen);
