import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { connect, Provider } from 'react-redux';
import Card from './common/card.js';
import CardSection from './common/cardSection.js';
import ButtonGreen from './common/buttonGreen.js';
import ButtonRed from './common/buttonRed.js';
import {
  onDeleteTodo,
  onDoneTodo,
  onDeleteDone,
} from '../actions/listAction.js';

class toDoList extends React.Component {
  buttonDelete(index) {
    const { todoList } = this.props;
    this.props.onDeleteTodo({ index, list: todoList });
  }

  buttonDone(index) {
    const { todoList } = this.props;
    this.props.onDoneTodo({ index, list: todoList });
  }

  buttonDoneDelete(index) {
    const { todoListDone } = this.props;
    this.props.onDeleteDone({ index, list: todoListDone });
  }

  renderTimeAndDate(time, date) {
    if (typeof time === 'string' && typeof date === 'string') {
      return (
        <p>
          {' '}
          {moment(time).format('HH:mm')} - {moment(date).format('DD/MM/YY')}
        </p>
      );
    } else {
      return (
        <p>
          {' '}
          {time.format('HH:mm')} - {date.format('DD/MM/YY')}
        </p>
      );
    }
  }

  renderList() {
    const { todoList, todoListDone, allButton, doneButton } = this.props;
    const todoListSorted = _.orderBy(
      todoList,
      ['date', 'time'],
      ['asc', 'asc']
    );

    if (allButton) {
      return todoListSorted.map((todo, index) => (
        <Card key={index}>
          <CardSection>
            <h3>{todo.name}</h3>
            {this.renderTimeAndDate(todo.time, todo.date)}

            <View>
              <ButtonGreen onPress={() => this.buttonDone(index)}>
                Done
              </ButtonGreen>
              <ButtonRed onPress={() => this.buttonDelete(index)}>
                Delete
              </ButtonRed>
            </View>
          </CardSection>
          <CardSection>
            <p>{todo.info}</p>
          </CardSection>
        </Card>
      ));
    } else if (doneButton) {
      return todoListDone.map((todo, index) => (
        <Card key={index}>
          <CardSection>
            <h3>{todo.name}</h3>
            <View>
              <ButtonRed onPress={() => this.buttonDoneDelete(index)}>
                Delete
              </ButtonRed>
            </View>
          </CardSection>
          <CardSection>
            <p>{todo.info}</p>
          </CardSection>
        </Card>
      ));
    }
  }

  render() {
    const { cardContainer } = styles;
    return <View style={cardContainer}>{this.renderList()}</View>;
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    position: 'relative',
    flex: 1,
    width: '60%',
  },
});

const mapStateToProps = ({ addReducer, HeaderReducer }) => {
  const { todoList, todoListDone } = addReducer;
  const { allButton, doneButton } = HeaderReducer;
  return { todoList, todoListDone, allButton, doneButton };
};

export default connect(mapStateToProps, {
  onDeleteTodo,
  onDoneTodo,
  onDeleteDone,
})(toDoList);
