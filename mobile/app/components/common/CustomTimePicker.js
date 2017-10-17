import React, { Component } from "react";
import { DatePicker } from "react-native-ui-xg";

class CustomTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ""
    };
  }

  render() {
    return (
      <DatePicker
        style={this.props.style}
        placeholder={this.props.placeholder}
        date={this.state.time}
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
        onDateChange={time => {
          this.setState({ time: time });
        }}
      />
    );
  }
}

export { CustomTimePicker };
