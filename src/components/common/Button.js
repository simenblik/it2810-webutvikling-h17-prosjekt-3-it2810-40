import React from 'react';

const Button = ({action, children, style}) => {
    const {buttonStyle} = styles;

    return (
        <button onclick={action} style={[buttonStyle, style]}>
            {children}
        </button>
    )

};

//skrive in style her, så får vi en standarisert knapp

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',

    }

};

export {Button}