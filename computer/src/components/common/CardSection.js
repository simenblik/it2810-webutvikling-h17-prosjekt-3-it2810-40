import React from 'react';

//er en container som kan ha

const CardSection = props => {
  return <div style={styles.containerStyle}>{props.children}</div>;
};

const styles = {
  containerStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    marginLeft: '5px',
    marginRight: '5px',
    fontSize: '18px',
  },
};

export { CardSection };
