import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Card, CardSection, Button} from "../components/common";
import {connect} from 'react-redux';
import {RoundButton} from "../components/common/RoundButton";


class ToDoListScreen extends Component {
    renderList() {
        const{todoList} = this.props;


        return (

            todoList.map((todo, index) =>

                <Card key={index}>
                    <CardSection>
                        <Text>{todo.name}</Text>
                        <Text> {todo.time.format('HH:mm')} - {todo.date.format("DD/MM/YY")}</Text>
                        <View>
                            <Button>Done</Button>
                            <Button>Delete</Button>
                        </View>
                    </CardSection>
                    <CardSection>
                        <Text>{todo.info}</Text>
                    </CardSection>
                </Card>

            )
        );
    }

    render() {
        const {cardContainer} = styles;
        return(
            <View style={cardContainer}>
                {this.renderList()}
                <RoundButton onPress={() => Actions.add()}>+</RoundButton>
            </View>

        )
    }
}

const styles = {
    cardContainer: {
        position: 'relative',
        flexDirection: 'column',
        flex: 1
    }
};

const mapStateToProps = ({addReducer}) =>{
    const {todoList} = addReducer;
    return {todoList};
};

export default connect(mapStateToProps) (ToDoListScreen);