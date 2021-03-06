import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children, style, styleText }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={(textStyle, styleText)}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "black",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },

  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    borderRadius: 5,
    borderWidth: 0,
    borderColor: "black",
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
