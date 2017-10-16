import React from 'react';

const ButtonRed = ({ onPress, children }) => {
  const { buttonRedStyle, textStyle } = styles;

  return (
    <button onClick={onPress} style={buttonRedStyle}>
      <p style={textStyle}>{children}</p>
    </button>
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
