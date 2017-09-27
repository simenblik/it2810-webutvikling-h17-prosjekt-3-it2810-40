import React from 'react';

//er en container som kan ha

const Card = props => {
  const { buttonStyle, cardStyle } = styles;
  return (
    <div>
      <p>stuff</p>
    </div>
  );
  // return <div>{props.children}</div>;
};

const styles = {
  buttonStyle: {
    flex: 1,
  },
  cardStyle: {
    flex: 1,
    marginTop: 20,
    padding: 5,
  },
};

export default Card;
