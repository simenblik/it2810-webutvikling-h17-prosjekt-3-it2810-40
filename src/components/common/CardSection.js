import React from 'react';

//er en container som kan ha

const CardSection = (props) => {

    return (
        <div style={styles.containerStyle}>
            {props.children}
        </div>
    )

};


const styles = {
    containerStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
    }

};

export {CardSection}