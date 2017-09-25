import React from 'react';

const Button = ({action, children}) => {
    const {buttonStyle, text} = styles;

    return (
        <div onClick={action} style={buttonStyle}>
            <p style={text}>
                {children}
            </p>
        </div>
    )

};

//skrive in style her, så får vi en standarisert knapp

const styles = {
    buttonStyle: {
        display: 'flex',
        flex: 1,

        borderRadius: 5,
        borderWidth: 0,
        borderColor: 'black',
        marginRight: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',



    },

    text: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'White',
        fontFamily: 'Tahoma',
        fontWeight: '600',




    }



};

export {Button}