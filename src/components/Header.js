import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ButtonHeader, CardSection} from './common';
import Add from './Add';
import {doneAction, addAction, cancelAction, onDoneButton, onAllButton} from '../actions'

class Header extends Component {
/*

    constructor() {
        super();
        this.state = {
            allButton: true,
            doneButton: false,
        }
    }
*/

    allButton() {
        this.props.onAllButton();
/*
        this.setState({
            allButton: true,
            doneButton: false,
        })
        */
    }

    doneButton() {
        this.props.onDoneButton();

        /*
        this.setState({
            allButton: false,
            doneButton: true,
        })
        */
    }

    addButton() {
        const {add} = this.props;

        if(!add) {
            this.props.addAction()
        } else {
            this.props.cancelAction()
        }
    }



    renderAdd() {
        const {add} = this.props;
        if(add){
            return(
                <Add/>
            )
        } else {
            return(
                <div/>
            )
        }
    }

    render() {

        //Henter ut varibalene fra style
        const {navContainerStyle, header, containerStyle} = styles;
        const {allButton, doneButton} = this.props;
        return (
            <div style={containerStyle}>
                <div style={navContainerStyle}>
                    <div>
                        <CardSection>
                            <h1 style={header}>
                                Personal Information Manager
                            </h1>
                        </CardSection>
                    </div>
                    <div>
                        <CardSection>
                            <ButtonHeader active={allButton} action={() =>this.allButton()}>All</ButtonHeader>
                            <ButtonHeader active={doneButton} action={() => this.doneButton()}>Done</ButtonHeader>
                            <ButtonHeader action={() => this.addButton()}>Add Task</ButtonHeader>
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
        height: 50,


        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,


    },

    header: {
        display: 'flex',
        color: 'white',
        flex: 4,
        fontFamily: 'Tahoma',
        fontWeight: '600',
        fontSize: 25,
    },




};

const mapStateToProps = ({addReducer, HeaderReducer}) => {
    const {add} = addReducer;
    const {allButton, doneButton} = HeaderReducer;
    return {add, allButton, doneButton};
};


export default connect(mapStateToProps, {doneAction, addAction, cancelAction, onDoneButton, onAllButton}) (Header);
