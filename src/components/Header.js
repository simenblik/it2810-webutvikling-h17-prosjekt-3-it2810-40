import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonHeader, CardSection } from './common';
import Add from './Add';
import { doneAction, addAction, cancelAction } from '../actions';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      allButton: true,
      doneButton: false,
    };
  }

  allButton() {
    this.setState({
      allButton: true,
      doneButton: false,
    });
  }

  doneButton() {
    this.setState({
      allButton: false,
      doneButton: true,
    });
  }

  addButton() {
    const { add } = this.props;

    if (!add) {
      this.props.addAction();
    } else {
      this.props.cancelAction();
    }
  }

  renderAdd() {
    const { add } = this.props;
    if (add) {
      return <Add />;
    } else {
      return <div />;
    }
  }

  render() {
    //Henter ut varibalene fra style
    const { navContainerStyle, header, containerStyle } = styles;
    const { allButton, doneButton } = this.state;
    return (
      <div style={containerStyle}>
        <div style={navContainerStyle}>
          <div>
            <CardSection>
              <h1 style={header}>Personal Information Manager</h1>
            </CardSection>
          </div>
          <div>
            <CardSection>
              <ButtonHeader active={allButton} action={() => this.allButton()}>
                All
              </ButtonHeader>
              <ButtonHeader
                active={doneButton}
                action={() => this.doneButton()}
              >
                Done
              </ButtonHeader>
              <ButtonHeader action={() => this.addButton()}>
                Add Task
              </ButtonHeader>
            </CardSection>
          </div>
        </div>

        {this.renderAdd()}
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  navContainerStyle: {
    backgroundColor: 'black',
    height: '50',
    width: '100%',

    position: 'relative',
    left: '0',
    right: '0',
    top: '0',

    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10',
  },

  header: {
    display: 'flex',
    color: 'white',
    flex: '4',
    fontFamily: 'Tahoma',
    fontWeight: '600',
    fontSize: '25',
    marginLeft: '35',
  },
};

const mapStateToProps = ({ addReducer }) => {
  const { add } = addReducer;
  return { add };
};

export default connect(mapStateToProps, {
  doneAction,
  addAction,
  cancelAction,
})(Header);
