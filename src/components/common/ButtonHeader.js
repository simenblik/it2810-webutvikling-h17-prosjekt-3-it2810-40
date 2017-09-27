import React, {Component} from 'react';

class ButtonHeader extends Component {


    constructor() {
        super();
        this.state = {
            active: false
        }
    }

    renderUnderLine() {
        const {active} = this.state;
        const {action, children} = this.props;
        const {buttonStyle, text, underLine} = styles;

        if(active){
            return(
                <div onClick={action} style={buttonStyle}>
                    <p style={text}>
                        {children}
                    </p>
                    <div style={underLine}>
                    </div>
                </div>
            )
        } else {
            return (
                <div onClick={action} style={buttonStyle}>
                    <p style={text}>
                        {children}
                    </p>
                </div>
            )
        }
    }

    render(){

        return (
            <div>
                {this.renderUnderLine()}
            </div>
        )
    }

};

//skrive in style her, så får vi en standarisert knapp

const styles = {
    buttonStyle: {
        display: 'flex',
        flex: 1,

        borderRadius: 5,
        borderWidth: 0,
        borderColor: 'black',
        marginRight: 5,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },

    text: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'White',
        fontFamily: 'Tahoma',
        fontWeight: '600',
        marginBottom: 5
    },

    underLine: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
        height: 5,
        width: 50

    }



};

export {ButtonHeader}