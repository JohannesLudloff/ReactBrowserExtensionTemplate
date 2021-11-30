import React from "react";
import { render } from "react-dom";

function Popup(props) {
	return (
		<div className="popup">
			<div className="popup_inner">{props.children}</div>
		</div>
	);
}

render(<Popup />, document.getElementById("react-target"));
