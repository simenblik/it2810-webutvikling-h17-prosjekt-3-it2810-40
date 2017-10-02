import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux';


import {
  doneAction,
  cancelAction,
  nameChange,
  timeChange,
  dateChange,
  moreInfoChange,
} from '../actions';

import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';

import { Card, CardSection, Button } from './common';

class Add extends Component {



    buttonDone(){
        const {name, time, date, info} = this.props;
        this.props.doneAction({name, time, date, info});
    }

    buttonCancel(){
        this.props.cancelAction();
    }

    onNameChange(text) {
        this.props.nameChange({text: text.target.value});
    }

    onTimeChange(time){
        this.props.timeChange(time);
    }

    onDateChange(date){
        this.props.dateChange(date);
    }

    onInfoChange(text){
        this.props.moreInfoChange({text: text.target.value});
    }




    render(){
        const {
            container,
            inputStyle,
            areaStyle,
            buttonSection,
            textStyle,
            DateStyle} = styles;

        const {name, time, date, info} = this.props;


        return (
            <div style={container}>
                <Card>
                    <CardSection>
                        <h2 style={textStyle}>Add Task</h2>
                    </CardSection>

                    <CardSection>
                        <p style={textStyle}>Name</p>
                        <input style={inputStyle}
                               onChange={text => this.onNameChange(text)}
                               value={name}
                               placeholder="Webutvikling"/>
                    </CardSection>

                    <CardSection>
                        <p style={textStyle}>Time</p>
                        <TimePicker
                            style={{width: 140, marginRight: 10}}
                            value={time}
                            onChange={this.onTimeChange.bind(this)}

                        />
                    </CardSection>

                    <CardSection>
                        <p style={textStyle}>Date</p>
                        <DatePicker
                            style={DateStyle}
                            selected={date}
                            onChange={this.onDateChange.bind(this)}
                        />
                    </CardSection>

                    <CardSection>
                        <p style={textStyle}>More Info</p>
                    </CardSection>
                    <CardSection>
                        <textarea style={areaStyle}
                                  value={info}
                                  onChange={text => this.onInfoChange(text)}
                                  placeholder="write more inforamtion here"/>
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
    marginTop: '100',
    marginRight: '100',
    display: 'flex',
    flex: '1',
  },

  nameInputStyle: {
    borderRadius: '10',
    borderWidth: '1',
    paddingLeft: '10',
    width: '130',
  },

  textStyle: {
    fontFamily: 'Tahoma',
    fontFamily: 'TakaoPGothic',
  },

  timeStyle: {
    width: '140',
  },

  dateStyle: {
    display: 'flex',
    flex: '1',
  },

  infoInputStyle: {
    flex: '1',
    borderRadius: '10',
    borderWidth: '1',
    width: '200',
    height: '50',
    resize: 'vertical',
    justifyContent: 'center',
  },

  buttonSection: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10',
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
})(Add);
