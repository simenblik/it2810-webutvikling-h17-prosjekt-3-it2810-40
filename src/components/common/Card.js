import React from 'react';

//er en container som kan ha

const Card = props => {
  const { buttonStyle, cardStyle } = styles;
  return <div style={styles.cardStyle}>{props.children}</div>;
};

const styles = {
  buttonStyle: {
    flex: 1,
  },
  cardStyle: {
    flex: 1,
    marginTop: 100,
    padding: 3,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
};

export {Card};
