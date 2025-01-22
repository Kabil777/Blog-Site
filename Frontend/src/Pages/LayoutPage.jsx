import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Router/Routes";
import store from "../store/store";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getInitialCredits } from "../store/reducers/authReducer";
function LayoutPage() {
	return (
		<Router>
			<Routes />
		</Router>
	);
}

export default LayoutPage;
