import React from "react";

//er en container som kan ha

const Card = props => {
	const { cardStyle } = styles;
	return <div style={cardStyle}>{props.children}</div>;
};

const styles = {
	cardStyle: {
		display: "flex",
		flex: "1",
		flexDirection: "column",
		padding: "3px",
		borderRadius: "10px",
		backgroundColor: "#ccc",
		marginTop: "10px",

	}
};

export { Card };
