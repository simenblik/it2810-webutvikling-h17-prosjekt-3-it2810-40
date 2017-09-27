import React, { Component } from 'react';
import {ButtonHeader, CardSection} from './common';

class Header extends Component {

    render() {

        //Henter ut varibalene fra style
        const {containerStyle, header} = styles;
        return (
            <div style={containerStyle}>

                    <CardSection>
                        <h1 style={header}>
                            Personal Information Manager
                        </h1>
                    </CardSection>

                    <CardSection>

                        <ButtonHeader style={{margin: 0}}>All</ButtonHeader>
                        <ButtonHeader>Done</ButtonHeader>
                        <ButtonHeader>Add task</ButtonHeader>
                    </CardSection>
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
