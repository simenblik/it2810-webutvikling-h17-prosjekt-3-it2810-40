import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import {
  doneAction,
  cancelAction,
  nameChange,
  timeChange,
  dateChange,
  moreInfoChange
} from '../actions';

import {
  Card,
  CardSection,
  Button,
  Input,
  LargInput,
  Form,
  FormSection,
  DateTimePicker
} from '../components/common';

class AddModalScreen extends Component {
  buttonDone() {
    const { name, time, date, info } = this.props;
    this.props.doneAction({ name, time, date, info });
  }

  buttonCancel() {
    this.props.cancelAction();
    Actions.pop();
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
      headerStyle,
      DateStyle,
      buttonStyle,
      buttonText,
      pickerStyle
    } = styles;

    const { name, time, date, info } = this.props;

    return (
      <View style={container}>
        <Form>
          <FormSection>
            <Text style={(textStyle, headerStyle)}>Add Task</Text>
          </FormSection>

          <FormSection>
            <Text style={textStyle}>Task name:</Text>
            <TextInput
              style={inputStyle}
              onChangeText={text => this.onNameChange(text)}
              value={name}
              placeholder="Tap to type..."
              underlineColorAndroid={'transparent'}
            />
          </FormSection>

          <FormSection>
            <Text style={textStyle}>Time:</Text>
            <DateTimePicker
              style={pickerStyle}
              placeholder="Tap to pick time..."
              mode="time"
              format="HH:mm"
            />
          </FormSection>

          <FormSection>
            <Text style={textStyle}>Date:</Text>
            <DateTimePicker
              style={pickerStyle}
              onChange={this.onDateChange.bind(this)}
              placeholder="Tap to pick date..."
              mode="date"
              format="DD.MM.YYYY"
            />
          </FormSection>

          <FormSection>
            <Text style={textStyle}>Task description:</Text>
            <TextInput
              style={[
                inputStyle,
                { textAlign: 'left', textAlignVertical: 'top' }
              ]}
              value={info}
              underlineColorAndroid={'transparent'}
              multiline={true}
              numberOfLines={4}
              editable={true}
              maxLength={200}
              onChange={text => this.onInfoChange(text)}
              placeholder="Tap to type..."
            />
          </FormSection>

          <FormSection>
            <View style={buttonSection}>
              <Button
                style={buttonStyle}
                styleText={buttonText}
                onPress={() => this.buttonDone()}
              >
                Done
              </Button>
              <Button
                style={buttonStyle}
                styleText={buttonText}
                onPress={() => this.buttonCancel()}
              >
                Cancel
              </Button>
            </View>
          </FormSection>
        </Form>
      </View>
    );
  }
}

//edit to StyleSheet.create
const styles = {
  container: {
    marginTop: 2,
    marginRight: 2,
    display: 'flex',
    flex: 1
  },

  nameInputStyle: {
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 3,
    flex: 1
  },

  textStyle: {
    fontFamily: 'Tahoma',
    fontFamily: 'TakaoPGothic'
  },

  headerStyle: {
    fontSize: 30
  },

  infoInputStyle: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    width: 200,
    height: 50,
    resize: 'vertical',
    justifyContent: 'center'
  },

  buttonSection: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 10,
    height: 50
  },

  buttonStyle: {
    backgroundColor: '#2196F3',
    elevation: 2,
    width: '100%'
  },

  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  inputStyle: {
    padding: 5,
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 0
  },

  pickerStyle: {
    width: '100%',
    borderColor: '#000',
    borderRadius: 4,
    borderWidth: 1
  }
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
  moreInfoChange
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
