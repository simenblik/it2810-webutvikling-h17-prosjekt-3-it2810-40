import React, { Component } from "react";
import { DatePicker } from "react-native-ui-xg";

class CustomDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }

  render() {
    return (
      <DatePicker
        style={this.props.style}
        placeholder={this.props.placeholder}
        date={this.state.date}
        mode={this.props.mode}
        format={this.props.format}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            right: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginRight: 40,
            paddingLeft: 5,
            alignItems: "flex-start"
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={date => {
          this.setState({ date: date });
        }}
      />
    );
  }
}

export { CustomDatePicker };
