import React, { Component } from 'react';
import {Button, CardSection} from './common';

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
                        <Button>All</Button>
                        <Button>Done</Button>
                        <Button>Add task</Button>
                    </CardSection>
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: 'black',
        height: 60,


        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,

        //display: 'inline',
        padding: 5,
        justifyContent: 'center',
        flexDirectin: 'row',



        //justifyContent: 'space-between',


    },

    header: {
        color: 'white',
        display: 'inline',


    },




};


export default Header;
