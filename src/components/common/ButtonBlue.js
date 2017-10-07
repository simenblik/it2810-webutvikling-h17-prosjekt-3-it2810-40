import React from "react";

const ButtonBlue = ({ onPress, children }) => {
	const { buttonBlueStyle, textStyle } = styles;

	return (
		<button onClick={onPress} style={buttonBlueStyle}>
			<p style={textStyle}>{children}</p>
		</button>
	);
};

const styles = {
	textStyle: {
		alignSelf: "center",
		color: "black",
		fontSize: "15px",
		fontWeight: "600"
	},

	buttonBlueStyle: {
		flex: "1",
		alignSelf: "stretch",
		borderRadius: "5px",
		borderWidth: "3px",
		borderColor: "blue",
		marginLeft: "5px",
		marginRight: "5px",
		backgroundColor: "white",
		cursor: "pointer"
	}
};

export { ButtonBlue };
