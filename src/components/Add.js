import React, { Component } from "react";
import TimePicker from "rc-time-picker";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import moment from "moment";

import {
	doneAction,
	cancelAction,
	nameChange,
	timeChange,
	dateChange,
	moreInfoChange
} from "../actions";

import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";

import { Card, CardSection, ButtonBlue, ButtonGreen } from "./common";

class Add extends Component {
	buttonDone() {
		const { name, time, date, info } = this.props;
		this.props.doneAction({ name, time, date, info });
	}

	buttonCancel() {
		this.props.cancelAction();
	}

	onNameChange(text) {
		this.props.nameChange({ text: text.target.value });
	}

	onTimeChange(time) {
		this.props.timeChange(time);
	}

	onDateChange(date) {
		this.props.dateChange(date);
	}

	onInfoChange(text) {
		this.props.moreInfoChange({ text: text.target.value });
	}

	render() {
		const {
			container,
			nameInputStyle,
			infoInputStyle,
			buttonSection,
			textStyle,
			timeStyle,
			dateStyle,
			errorStyle
		} = styles;

		const { name, time, date, info, error } = this.props;

		return (
			<div style={container}>
				<Card>
					<CardSection>
						<h2 style={textStyle}>Add Task</h2>
					</CardSection>

					<CardSection>
						<p style={textStyle}>Name</p>
						<input
							style={nameInputStyle}
							onChange={text => this.onNameChange(text)}
							value={name}
							placeholder="Task name"
						/>
					</CardSection>

					<CardSection>
						<p style={textStyle}>Time</p>
						<TimePicker
							style={timeStyle}
							value={moment(time)}
							onChange={this.onTimeChange.bind(this)}
						/>
					</CardSection>

					<CardSection>
						<p style={textStyle}>Date</p>
						<DatePicker
							style={dateStyle}
							selected={moment(date)}
							onChange={this.onDateChange.bind(this)}
						/>
					</CardSection>

					<CardSection>
						<p style={textStyle}>More Info</p>
					</CardSection>
					<CardSection>
						<textarea
							style={infoInputStyle}
							value={info}
							onChange={text => this.onInfoChange(text)}
							placeholder="Write inforamtion about the task here"
						/>
					</CardSection>
					<p style={errorStyle}> {error}</p>
					<div style={buttonSection}>
						<CardSection>
							<ButtonGreen onPress={() => this.buttonDone()}>Done</ButtonGreen>
							<ButtonBlue onPress={() => this.buttonCancel()}>
								Cancel
							</ButtonBlue>
						</CardSection>
					</div>
				</Card>
			</div>
		);
	}
}

const styles = {
	container: {
		position: "absolute",
		marginTop: "70px",
		marginRight: "100px",
		display: "flex",
		flex: "1"
	},
	errorStyle: {
		color: "red",
		fontSize: 12,
		alignSelf: "center"
	},

	nameInputStyle: {
		borderRadius: "5px",
		borderWidth: "1px",
		paddingLeft: "10px",
		width: "143px",
		height: "23px"
	},

	textStyle: {
		fontFamily: "Tahoma",
		fontFamily: "TakaoPGothic"
	},

	timeStyle: {
		width: "155px"
	},

	dateStyle: {
		display: "flex",
		flex: "1"
	},

	infoInputStyle: {
		flex: "1",
		borderRadius: "10px",
		borderWidth: "1px",
		width: "300px",
		height: "50px",
		resize: "vertical",
		justifyContent: "center"
	},

	buttonSection: {
		display: "flex",
		justifyContent: "center",
		margin: "5px"
	}
};

const mapStateToProps = ({ addReducer }) => {
	const { name, time, date, info, error } = addReducer;
	return { name, time, date, info, error };
};

export default connect(mapStateToProps, {
	doneAction,
	cancelAction,
	nameChange,
	timeChange,
	dateChange,
	moreInfoChange
})(Add);
