import React, { Component } from 'react';

function Button(props) {
  return (
    <button
      className={props.name + '-button'}
      onClick={props.onClick}
      style={styles.buttonStyle}
    >
      {props.value}
    </button>
  );
}

class ButtonList extends Component {
  render() {
    return (
      <div className="button-group">
        <Button name="done" onClick="" value="Done" />
        <Button name="edit" onClick="" value="Edit" />
        <Button name="delete" onClick="" value="Delete" />
      </div>
    );
  }
}

//skrive in style her, så får vi en standarisert knapp
const styles = {
  buttonStyle: {
    width: 60,
    margin: 5,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 2,
  },
};

export {ButtonList};
