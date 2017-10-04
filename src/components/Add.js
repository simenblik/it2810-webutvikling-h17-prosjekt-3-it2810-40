import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import moment from 'moment';

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
    const { name, time, date, info } = this.props;
    this.props.doneAction({ name, time, date, info });
  }

  buttonCancel() {
    this.props.cancelAction();
  }

  onNameChange(text) {
    this.props.nameChange({ text: text.target.value });
  }

  onTimeChange(time) {
    this.props.timeChange(time);
  }

  onDateChange(date) {
    this.props.dateChange(date);
  }

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
        errorStyle
    } = styles;

    const { name, time, date, info, error } = this.props;

    return (
      <div style={container}>
        <Card>
          <CardSection>
            <h2 style={textStyle}>Add Task</h2>
          </CardSection>

          <CardSection>
            <p style={textStyle}>Name</p>
            <input
              style={inputStyle}
              onChange={text => this.onNameChange(text)}
              value={name}
              placeholder="Webutvikling"
            />
          </CardSection>

          <CardSection>
            <p style={textStyle}>Time</p>
            <TimePicker
              style={{ width: 140, marginRight: 10 }}
              value={moment(time)}
              onChange={this.onTimeChange.bind(this)}
            />
          </CardSection>

          <CardSection>
            <p style={textStyle}>Date</p>
            <DatePicker
              style={DateStyle}
              selected={moment(date)}
              onChange={this.onDateChange.bind(this)}
            />
          </CardSection>

          <CardSection>
            <p style={textStyle}>More Info</p>
          </CardSection>
          <CardSection>
            <textarea
              style={areaStyle}
              value={info}
              onChange={text => this.onInfoChange(text)}
              placeholder="write more inforamtion here"
            />
          </CardSection>
          <p style={errorStyle}> {error}</p>
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
    position: 'absolute',
    marginTop: '70px',
    marginRight: '100px',
    display: 'flex',
    flex: '1',
  },
    errorStyle: {
        color: 'red',
        fontSize: 12,
        alignSelf: 'center'
    },

  nameInputStyle: {
    borderRadius: '10px',
    borderWidth: '1px',
    paddingLeft: '10px',
    width: '130px',
  },

  textStyle: {
    fontFamily: 'Tahoma',
    fontFamily: 'TakaoPGothic',
  },

  timeStyle: {
    width: '140px',
  },

  dateStyle: {
    display: 'flex',
    flex: '1',
  },

  infoInputStyle: {
    flex: '1',
    borderRadius: '10px',
    borderWidth: '1px',
    width: '200px',
    height: '50px',
    resize: 'vertical',
    justifyContent: 'center',
  },

  buttonSection: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
  },
};

const mapStateToProps = ({ addReducer }) => {
  const { name, time, date, info, error } = addReducer;
  return { name, time, date, info, error };
};

export default connect(mapStateToProps, {
  doneAction,
  cancelAction,
  nameChange,
  timeChange,
  dateChange,
  moreInfoChange,
})(Add);
