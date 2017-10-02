import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, ButtonList} from './common';

class toDoList extends Component {

    getWeekDay(dayInWeek){
        switch (dayInWeek) {
            case 0:
                return 'Monday';
            case 1:
                return 'Tuesday';
            case 2:
                return 'Wednesday';
            case 3:
                return 'Thursday';
            case 4:
                return 'Friday';
            case 5:
                return 'Saturday';
            case 6:
                return 'Sunday';
            default:
                return '------';
        }
    }

    getMonth(month){
        switch (month) {
            case 1:
                return 'January';
            case 2:
                return 'Februar';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
        }
    }

    getDate(todo){
        const postDate = todo.getTime();
        let todaysDate = new Date().getTime();

        let postDateString = '';
        const postDateObject = new Date(postDate);

        //sjekker om posten ble laget innen en dag
        if(postDate + 86400000 > todaysDate){
            postDateString = postDateObject.getHours()
                + '.' + postDateObject.getMinutes();

            //sjekker om posten ble laget innen en uke
        } else if (postDate + 604800000 > todaysDate){
            postDateString = this.getWeekDay(postDateObject.getDay())
                + ' ' + postDateObject.getHours()
                + '.' + postDateObject.getMinutes();

            //sjekker om posten ble laget i år
        } else if(postDate + 31536000000 > todaysDate) {
            postDateString = postDateObject.getDay()
                + ' ' + this.getMonth(postDateObject.getMonth())
                + ' ' + postDateObject.getHours()
                + '.' + postDateObject.getMinutes();

        } else {
            postDateString = postDateObject.getDay() + '/' +
                postDateObject.getMonth() + '/' +
                postDateObject.getYear();
        }
        return postDateString;
    }

    dateFormat(date){
        let todaysDate = new Date()
        let postDateString = '';
        


    }



    renderList() {
        const{todoList} = this.props;


        return (
            todoList.map((todo, index) =>

                <Card key={index}>
                    <CardSection>
                        <h3>{todo.name}</h3>
                        <p>{todo.time.format('HH:mm')}</p>
                        <p>{todo.date.date()}</p>
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
        width: '40vw',
        flexDirection: 'flex',
        flex: 1
    }
};

const mapStateToProps = ({addReducer}) =>{
    const {todoList} = addReducer;
    return {todoList};
};

export default connect(mapStateToProps) (toDoList);