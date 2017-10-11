import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import { Card, CardSection, ButtonGreen, ButtonRed } from "./common";
import { onDeleteTodo, onDoneTodo, onDeleteDone } from "../actions/ListAction";

class toDoList extends Component {
	buttonDelete(index) {
		const { todoList } = this.props;
		this.props.onDeleteTodo({ index, list: todoList });
	}

	buttonDone(index) {
		const { todoList } = this.props;
		this.props.onDoneTodo({ index, list: todoList });
	}

	buttonDoneDelete(index) {
		const { todoListDone } = this.props;
		this.props.onDeleteDone({ index, list: todoListDone });
	}

	renderTimeAndDate(time, date) {
        const {textStyle} = styles;

		if (typeof time === "string" && typeof date === "string") {
			return (
				<p style={textStyle}>
					{" "}
					{moment(time).format("HH:mm")} - {moment(date).format("DD/MM/YY")}
				</p>
			);
		} else {
			return (
				<p style={textStyle}>
					{" "}
					{time.format("HH:mm")} - {date.format("DD/MM/YY")}
				</p>
			);
		}
	}

	renderList() {
		const { todoList, todoListDone, allButton, doneButton } = this.props;
		const {textStyle} = styles;
		const todoListSorted = _.orderBy(
			todoList,
			["date", "time"],
			["asc", "asc"]
		);

		if (allButton) {
			return todoListSorted.map((todo, index) => (
				<Card key={index}>
					<CardSection>
						<h3 style={textStyle}>{todo.name}</h3>
						{this.renderTimeAndDate(todo.time, todo.date)}

						<div>
							<ButtonGreen onPress={() => this.buttonDone(index)}>
								Done
							</ButtonGreen>
							<ButtonRed onPress={() => this.buttonDelete(index)}>
								Delete
							</ButtonRed>
						</div>
					</CardSection>
					<CardSection>
						<p style={textStyle}>{todo.info}</p>
					</CardSection>
				</Card>
			));
		} else if (doneButton) {
			return todoListDone.map((todo, index) => (
				<Card key={index}>
					<CardSection>
						<h3>{todo.name}</h3>
						<div>
							<ButtonRed onPress={() => this.buttonDoneDelete(index)}>
								Delete
							</ButtonRed>
						</div>
					</CardSection>
					<CardSection>
						<p>{todo.info}</p>
					</CardSection>
				</Card>
			));
		}
	}

	render() {
		const { cardContainer } = styles;
		return <div style={cardContainer}>{this.renderList()}</div>;
	}
}

const styles = {
	cardContainer: {
		position: "relative",
		width: "60vw",
		flexDirection: "flex",
		flex: 1
	},

	textStyle: {
        fontFamily: "TakaoPGothic",
        fontFamily: "Tahoma",
	}
};

const mapStateToProps = ({ addReducer, HeaderReducer }) => {
	const { todoList, todoListDone } = addReducer;
	const { allButton, doneButton } = HeaderReducer;
	return { todoList, todoListDone, allButton, doneButton };
};

export default connect(mapStateToProps, {
	onDeleteTodo,
	onDoneTodo,
	onDeleteDone
})(toDoList);
