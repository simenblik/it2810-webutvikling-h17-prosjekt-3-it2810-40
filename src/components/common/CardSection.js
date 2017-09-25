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
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative',
        display: 'flex',
        flex: 1

    }

};

export {CardSection}