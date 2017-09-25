import React from 'react';

const Button = ({action, children}) => {
    const {buttonStyle, text} = styles;

    return (
        <button onClick={action} style={buttonStyle}>
            <p style={text}>
                {children}
            </p>
        </button>
    )

};

//skrive in style her, så får vi en standarisert knapp

const styles = {
    buttonStyle: {
        display: 'flex',
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 0,
        borderColor: 'black',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',





    },

    text: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }



};

export {Button}