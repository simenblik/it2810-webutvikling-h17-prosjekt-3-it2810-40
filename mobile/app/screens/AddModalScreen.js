

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View, TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';

/*import TimePicker from 'rc-time-picker';
import DatePicker from 'react-datepicker'; */


import {
    doneAction,
    cancelAction,
    nameChange,
    timeChange,
    dateChange,
    moreInfoChange,
} from '../actions';

/*
import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';*/

import {Card, CardSection, Button} from "../components/common";

class AddModalScreen extends Component {
    buttonDone() {
        const { name, time, date, info } = this.props;
        this.props.doneAction({ name, time, date, info });
    }

    buttonCancel() {
        this.props.cancelAction();
    }

    onNameChange(text) {
        this.props.nameChange({ text: text.target.value });
    }

   /* onTimeChange(time) {
        this.props.timeChange(time);
    }

    onDateChange(date) {
        this.props.dateChange(date);
    } */

    onInfoChange(text) {
        this.props.moreInfoChange({ text: text.target.value });
    }

    render() {
        const {
            container,
            inputStyle,
            areaStyle,
            buttonSection,
            textStyle,
            DateStyle,
        } = styles;

        const { name, time, date, info } = this.props;

        return (
            <View style={container}>
                <Card>
                    <CardSection>
                        <Text style={textStyle}>Add Task</Text>
                    </CardSection>

                    <CardSection>
                        <Text style={textStyle}>Name</Text>
                        <TextInput
                            style={inputStyle}
                            onChange={text => this.onNameChange(text)}
                            value={name}
                            placeholder="Webutvikling"
                        />
                    </CardSection>

                    <CardSection>
                        <Text style={textStyle}>Time</Text>

                    </CardSection>

                    <CardSection>
                        <Text style={textStyle}>Date</Text>

                    </CardSection>

                    <CardSection>
                        <Text style={textStyle}>More Info</Text>
                    </CardSection>
                    <CardSection>
            <TextInput
                style={areaStyle}
                value={info}
                onChange={text => this.onInfoChange(text)}
                placeholder="write more inforamtion here"
            />
                    </CardSection>
                    <View style={buttonSection}>
                        <CardSection>
                            <Button onPress={() => this.buttonDone()}>Done</Button>
                            <Button onPress={() => Actions.pop()}>Cancel</Button>
                        </CardSection>
                    </View>
                </Card>
            </View>
        );
    }
}


//edit to StyleSheet.create
const styles = {
    container: {
        backgroundColor: '#004eff',
        marginTop: 2,
        marginRight: 2,
        display: 'flex',
        flex: 1,
    },

    nameInputStyle: {
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 3,
        flex:1
    },

    textStyle: {
        fontFamily: 'Tahoma',
        fontFamily: 'TakaoPGothic',
    },

    infoInputStyle: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        width: 200,
        height: 50,
        resize: 'vertical',
        justifyContent: 'center',
    },

    buttonSection: {
        display: 'flex',
        justifyContent: 'center',
        margin: 10,
    },
};

const mapStateToProps = ({ addReducer }) => {
    const { name, time, date, info } = addReducer;
    return { name, time, date, info };
};

export default connect(mapStateToProps, {
    doneAction,
    cancelAction,
    nameChange,
    timeChange,
    dateChange,
    moreInfoChange,
})(AddModalScreen);





/*
const AddModalScreen = () => {
    return (
        <View>
            <Text
                onPress={() => Actions.pop()}
            >
                AddScreen
            </Text>
        </View>
    );
}





export default AddModalScreen;*/