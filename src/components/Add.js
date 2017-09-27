import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import {Card, CardSection} from './common';

class Add extends Component {



    render(){
        const {container, inputStyle, areaStyle} = styles;


        return (
            <div style={container}>
                <Card>
                    <CardSection>
                        <h2>Add Task</h2>
                    </CardSection>

                    <CardSection>
                        <p>Name</p>
                        <input style={inputStyle} placeholder="Webutvikling"/>
                    </CardSection>

                    <CardSection>
                        <p>Time</p>
                        <TimePicker
                            style={{width: 140, marginRight: 10}}
                            defaultValue={moment()}
                            //className="Add"
                            //onChange={this.onChange.bind(this)}
                        />
                    </CardSection>

                    <CardSection>
                        <p>Date</p>
                        <input style={inputStyle}/>
                    </CardSection>

                    <CardSection>
                        <p>More Info</p>
                    </CardSection>
                    <CardSection>
                        <textarea style={areaStyle} placeholder="write more inforamtion here"/>
                    </CardSection>
                </Card>
            </div>
        )
    }
}

const styles = {
    container: {
        marginTop: 50,
        marginRight: 15,
        display: 'flex',
        flex: '1'
    },

    inputStyle: {
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        margin: 10
       // borderColor: 'green',

    },

    areaStyle: {
        borderRadius: 10,
        borderWidth: 1,
        width: 200,
        height: 100
    }
};

export default Add;