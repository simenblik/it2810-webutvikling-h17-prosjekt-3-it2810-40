import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const RoundButton = ({onPress, children, style}) => {

    const { roundButtonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={[roundButtonStyle, style]}>
                <Text style={textStyle}>
                    {children}
                </Text>
        </TouchableOpacity>
    );
};

const styles = {

    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 30,
        textAlignVertical: 'center',
        flex: 1
    },

    roundButtonStyle: {
        position: 'absolute',
        borderRadius: 28,
        borderWidth: 0,
        backgroundColor: '#2ba3ff',
        bottom: 35,
        right: 35,
        height: 56,
        width: 56,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.2,
        alignContent: 'center',


    }
};

export {RoundButton};