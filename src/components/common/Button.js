import React from 'react';


const Button = ({onPress, children}) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <button onClick={onPress} style={buttonStyle}>
            <p style={textStyle}>
                {children}
            </p>
        </button>
    );
};

const styles = {

    textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 12,
        fontWeight: '600',

    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 0,
        borderColor: 'black',
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'white'
    }
};

export {Button};