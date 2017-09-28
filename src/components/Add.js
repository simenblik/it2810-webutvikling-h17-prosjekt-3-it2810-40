import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {connect} from 'react-redux';

import {doneAction, cancelAction} from '../actions'

import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';


import {Card, CardSection, Button} from './common';

class Add extends Component {
    constructor() {
        super();
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    buttonDone(){
        this.props.doneAction();
    }

    buttonCancel(){
        this.props.cancelAction();
    }


    render(){
        const {
            container,
            inputStyle,
            areaStyle,
            buttonSection,
            textStyle,
            DateStyle} = styles;


        return (
            <div style={container}>
                <Card>
                    <CardSection>
                        <h2 style={textStyle}>Add Task</h2>
                    </CardSection>

                    <CardSection>
                        <p style={textStyle}>Name</p>
                        <input style={inputStyle} placeholder="Webutvikling"/>
                    </CardSection>

                    <CardSection>
                        <p style={textStyle}>Time</p>
                        <TimePicker
                            style={{width: 140, marginRight: 10}}
                            defaultValue={moment()}

                        />
                    </CardSection>

                    <CardSection>
                        <p style={textStyle}>Date</p>
                        <DatePicker
                            style={DateStyle}
                            selected={moment()}
                            onChange={this.handleChange}
                        />
                    </CardSection>

                    <CardSection>
                        <p style={textStyle}>More Info</p>
                    </CardSection>
                    <CardSection>
                        <textarea style={areaStyle} placeholder="write more inforamtion here"/>
                    </CardSection>
                    <div style={buttonSection}>
                        <CardSection>
                            <Button onPress={() => this.buttonDone()}>
                                Done
                            </Button>
                            <Button onPress={() => this.buttonCancel()}>
                                Cancel
                            </Button>
                        </CardSection>
                    </div>
                </Card>
            </div>
        )
    }
}

const styles = {
    container: {
        marginTop: 50,
        marginRight: 100,
        display: 'flex',
        flex: '1'
    },

    inputStyle: {
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        margin: 10
       // borderColor: 'green',

    },

    areaStyle: {
        borderRadius: 10,
        borderWidth: 1,
        width: 200,
        height: 50,
        resize: 'vertical'
    },

    buttonSection: {
        margin: 10
    },

    textStyle: {
        fontFamily: 'Tahoma',
    },
    DateStyle: {

    }
};

const mapStateToProps = ({}) => {
    return {};
};

export default connect(mapStateToProps, {doneAction, cancelAction})(Add) ;