import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';

import { Card, CardSection, Button } from './common';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    const {
      container,
      nameInputStyle,
      infoInputStyle,
      buttonSection,
      textStyle,
      timeStyle,
      dateStyle,
    } = styles;

    return (
      <div style={container}>
        <Card>
          <CardSection>
            <h2 style={textStyle}>Add Task</h2>
          </CardSection>

          <CardSection>
            <p style={textStyle}>Name</p>
            <input style={nameInputStyle} placeholder="Webutvikling" />
          </CardSection>

          <CardSection>
            <p style={textStyle}>Time</p>
            <TimePicker style={timeStyle} defaultValue={moment()} />
          </CardSection>

          <CardSection style={dateStyle}>
            <p style={textStyle}>Date</p>
            <DatePicker selected={moment()} onChange={this.handleChange} />
          </CardSection>

          <CardSection>
            <p style={textStyle}>More Info</p>
          </CardSection>

          <CardSection>
            <textarea
              style={infoInputStyle}
              placeholder="Write more inforamtion here"
            />
          </CardSection>
          <div style={buttonSection}>
            <CardSection>
              <Button>Done</Button>
              <Button>Cancel</Button>
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

export default Add;
