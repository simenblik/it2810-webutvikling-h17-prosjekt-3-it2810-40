import React from 'react';

const ButtonGreen = ({ onPress, children }) => {
  const { buttonGreenStyle, textStyle } = styles;

  return (
    <button onClick={onPress} style={buttonGreenStyle}>
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

  buttonGreenStyle: {
    flex: '1',
    alignSelf: 'stretch',
    borderRadius: '5px',
    borderWidth: '3px',
    borderColor: '#0d0',
    marginLeft: '5px',
    marginRight: '5px',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
};

export { ButtonGreen };
