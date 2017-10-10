import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ButtonGreen = ({ onPress, children }) => {
  const { buttonGreenStyle, textStyle } = styles;

  return (
    <Button onClick={onPress} style={buttonGreenStyle}>
      <p style={textStyle}>{children}</p>
    </Button>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: '15px',
    fontWeight: '600',
  },

  buttonGreenStyle: {
    flex: '1',
    alignSelf: 'stretch',
    borderRadius: '5px',
    borderWidth: '3px',
    borderColor: 'green',
    marginLeft: '5px',
    marginRight: '5px',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
};

export { ButtonGreen };
