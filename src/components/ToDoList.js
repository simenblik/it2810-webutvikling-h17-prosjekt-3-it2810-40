import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Button} from './common';
import {onDeleteTodo, onDoneTodo, onDeleteDone} from '../actions/ListAction'

class toDoList extends Component {


    buttonDelete(index){
        const {todoList} = this.props;
        this.props.onDeleteTodo({index, list: todoList})
    }

    buttonDone(index){
        const {todoList} = this.props;
        this.props.onDoneTodo({index, list: todoList })
    }

    buttonDoneDelete(index) {
        const {todoListDone} = this.props;
        this.props.onDeleteDone({index, list: todoListDone })
    }


    renderList() {
        const{todoList, todoListDone, allButton, doneButton} = this.props;

    if(allButton) {
        return (
            todoList.map((todo, index) =>

                <Card key={index}>
                    <CardSection>
                        <h3>{todo.name}</h3>
                        <p> {todo.time.format('HH:mm')} - {todo.date.format("DD/MM/YY")}</p>
                        <div>
                            <Button onPress={() => this.buttonDone(index)}>Done</Button>
                            <Button onPress={() => this.buttonDelete(index)}>Delete</Button>
                        </div>
                    </CardSection>
                    <CardSection>
                        <p>{todo.info}</p>
                    </CardSection>
                </Card>
            )
        );
    } else if (doneButton){
        return (
            todoListDone.map((todo, index) =>

                <Card key={index}>
                    <CardSection>
                        <h3>{todo.name}</h3>
                        <div>
                            <Button onPress={() => this.buttonDoneDelete(index)}>Delete</Button>
                        </div>
                    </CardSection>
                    <CardSection>
                        <p>{todo.info}</p>
                    </CardSection>
                </Card>
            )
        );
    }
    }

    render() {
        const {cardContainer} = styles;
        return(
            <div style={cardContainer}>
                {this.renderList()}
            </div>
        )
    }
}

const styles = { 
    cardContainer: {
        position: 'relative',
        width: '40vw',
        flexDirection: 'flex',
        flex: 1
    }
};

const mapStateToProps = ({addReducer, HeaderReducer}) =>{
    const {todoList, todoListDone} = addReducer;
    const {allButton, doneButton} = HeaderReducer;
    return {todoList, todoListDone, allButton, doneButton};
};

export default connect(mapStateToProps, {onDeleteTodo, onDoneTodo, onDeleteDone}) (toDoList);