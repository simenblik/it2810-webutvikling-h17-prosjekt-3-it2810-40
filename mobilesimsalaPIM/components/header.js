import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>This is the header component.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },

  navContainerStyle: {
    backgroundColor: 'black',
    height: '50px',
    width: '100%',

    position: 'relative',
    left: '0px',
    right: '0px',
    top: '0px',

    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
  },

  header: {
    display: 'flex',
    flex: 4,
    color: 'white',
    fontFamily: 'Tahoma',
    fontWeight: '600',
    fontSize: 25,
    marginLeft: 35,
  },
});
