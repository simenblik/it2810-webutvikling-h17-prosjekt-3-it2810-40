import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import {Card, CardSection} from './common';

class Add extends Component {



    render(){
        const {container, inputStyle} = styles;


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

                            defaultValue={moment()}
                            //className="Add"
                            //onChange={this.onChange.bind(this)}
                        />
                    </CardSection>

                    <CardSection>
                        <p>Date</p>
                        <input/>
                    </CardSection>

                    <CardSection>
                        <p>More Info</p>
                        <input/>
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

    }
};

export default Add;