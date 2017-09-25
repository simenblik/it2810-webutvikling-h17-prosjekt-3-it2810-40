import React from 'react';

//er en container som kan ha

const Card = (props) => {
    const {} = styles;

    return (
        <div>
            {props.children}
        </div>
    )

};


const styles = {
    buttonStyle: {
        flex: 1

    }

};

export {Card}