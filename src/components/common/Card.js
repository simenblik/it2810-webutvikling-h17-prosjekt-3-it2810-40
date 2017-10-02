import React from 'react';

//er en container som kan ha

const Card = props => {
  const { buttonStyle, cardStyle } = styles;
  return <div style={cardStyle}>{props.children}</div>;
};

const styles = {
  buttonStyle: {
    flex: 1,
  },
  cardStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 3,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
};

export { Card };
