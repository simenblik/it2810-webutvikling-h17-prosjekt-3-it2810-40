import React, { Component } from 'react';
import {ButtonHeader, CardSection} from './common';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            all: true,
            done: false
        }
    }

    allButton() {
        this.setState({
            all: true,
            done: false
        })
    }

    doneButton() {
        this.setState({
            all: false,
            done: true
        })
    }

    render() {

        //Henter ut varibalene fra style
        const {containerStyle, header} = styles;
        const {all, done} = this.state;
        return (
            <div style={containerStyle}>
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
                        <ButtonHeader>Add task</ButtonHeader>
                    </CardSection>
                </div>

            </div>
        );
    }
}

const styles = {
    containerStyle: {
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
