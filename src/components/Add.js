import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';

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
  buttonDone() {
    this.props.doneAction();
  }

  buttonCancel() {
    this.props.cancelAction();
  }

  onNameChange(text) {
    this.props.nameChange(text);
  }

  onTimeChange(time) {
    this.props.timeChange(time);
  }

  onDateChange(date) {
    this.props.dateChange(date);
  }

  onInfoChange(text) {
    this.props.moreInfoChange(text);
  }

  render() {
    const {
      container,
      nameInputStyle,
      infoInputStyle,
      timeStyle,
      buttonSection,
      textStyle,
      dateStyle,
    } = styles;

    const { name, time, date, info } = this.props;

    return (
      <div style={container}>
        <Card>
          <CardSection>
            <h2 style={textStyle}>Add Task</h2>
          </CardSection>

          <CardSection>
            <p style={textStyle}>Name</p>
            <input
              style={nameInputStyle}
              onChange={this.onNameChange.bind(this)}
              value={name}
              placeholder="Webutvikling"
            />
          </CardSection>

          <CardSection>
            <p style={textStyle}>Time</p>
            <TimePicker
              value={time}
              style={timeStyle}
              onChange={this.onTimeChange.bind(this)}
            />
          </CardSection>

          <CardSection>
            <p style={textStyle}>Date</p>
            <DatePicker
              style={dateStyle}
              selected={date}
              onChange={this.onDateChange.bind(this)}
            />
          </CardSection>

          <CardSection>
            <p style={textStyle}>More Info</p>
          </CardSection>
          <CardSection>
            <textarea
              style={infoInputStyle}
              value={info}
              onChange={this.onInfoChange.bind(this)}
              placeholder="write more inforamtion here"
            />
          </CardSection>

          <div style={buttonSection}>
            <CardSection>
              <Button onPress={() => this.buttonDone()}>Done</Button>
              <Button onPress={() => this.buttonCancel()}>Cancel</Button>
            </CardSection>
          </div>
        </Card>
      </div>
    );
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
