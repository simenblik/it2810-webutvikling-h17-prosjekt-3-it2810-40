import React from "react";

const Button = ({ onPress, children, buttonColor }) => {
	const { buttonStyle, textStyle } = {
		textStyle: {
			alignSelf: "center",
			color: "black",
			fontSize: "15px",
			fontWeight: "600"
		},

		buttonStyle: {
			flex: "1",
			alignSelf: "stretch",
			borderRadius: "5px",
			borderWidth: "3px",
			borderColor: buttonColor,
			marginLeft: "5px",
			marginRight: "5px",
			backgroundColor: "white",
			cursor: "pointer"
		}
	};

	return (
		<button onClick={onPress} style={buttonStyle}>
			<p style={textStyle}>{children}</p>
		</button>
	);
};

export { Button };
