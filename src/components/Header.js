import React, { Component } from 'react';
import {ButtonHeader, CardSection} from './common';
import Add from './Add';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            all: true,
            done: false,
            add: false
        }
    }

    allButton() {
        this.setState({
            all: true,
            done: false,
            add: false

        })
    }

    doneButton() {
        this.setState({
            all: false,
            done: true,
            add: false

        })
    }

    addButton() {
        this.setState({
            add: true

        })
    }

    render() {

        //Henter ut varibalene fra style
        const {navContainerStyle, header, containerStyle} = styles;
        const {all, done} = this.state;
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
                            <ButtonHeader active={all} action={() =>this.allButton()}>All</ButtonHeader>
                            <ButtonHeader active={done} action={() => this.doneButton()}>Done</ButtonHeader>
                            <ButtonHeader action={() => this.addButton()}>Add</ButtonHeader>
                        </CardSection>
                    </div>
                </div>
                <Add/>
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

        //display: 'inline',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,




        //justifyContent: 'space-between',

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


export default Header;
