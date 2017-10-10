import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ButtonRed = ({ onPress, children }) => {
  const { buttonRedStyle, textStyle } = styles;

  return (
    <Button onClick={onPress} style={buttonRedStyle}>
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

  buttonRedStyle: {
    flex: '1',
    alignSelf: 'stretch',
    borderRadius: '5px',
    borderWidth: '3px',
    borderColor: 'red',
    marginLeft: '5px',
    marginRight: '5px',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
};

export { ButtonRed };
