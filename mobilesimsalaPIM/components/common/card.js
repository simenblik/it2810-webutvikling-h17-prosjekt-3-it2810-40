import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//er en container som kan ha

const Card = props => {
  const { cardStyle } = styles;
  return <View style={cardStyle}>{props.children}</View>;
};

const styles = {
  cardStyle: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    padding: '3px',
    borderRadius: '10px',
    backgroundColor: '#ccc',
    marginTop: '10px',
  },
};

export { Card };
