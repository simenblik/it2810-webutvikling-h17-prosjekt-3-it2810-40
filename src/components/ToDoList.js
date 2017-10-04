import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Button} from './common';
import {onDeleteTodo} from '../actions/ToDoListAction'

class toDoList extends Component {


    buttonDelete(index){
        const {todoList} = this.props;
        this.props.onDeleteTodo({index, list: todoList})
    }


    renderList() {
        const{todoList} = this.props;


        return (
            todoList.map((todo, index) =>

                <Card key={index}>
                    <CardSection>
                        <h3>{todo.name}</h3>
                        <p> {todo.time.format('HH:mm')} - {todo.date.format("DD/MM/YY")}</p>
                        <div>
                            <Button>Done</Button>
                            <Button onPress={() => this.buttonDelete(index)}>Delete</Button>
                        </div>
                    </CardSection>
                    <CardSection>
                        <p>{todo.info}</p>
                    </CardSection>
                </Card>

            )
        );
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

const mapStateToProps = ({addReducer}) =>{
    const {todoList} = addReducer;
    return {todoList};
};

export default connect(mapStateToProps, {onDeleteTodo}) (toDoList);