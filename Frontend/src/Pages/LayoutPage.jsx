import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Router/Routes";
import store from "../store/store";
import { Provider } from "react-redux";
function LayoutPage() {
	return (
		<Provider store={store}>
			<Router>
				<Routes />
			</Router>
		</Provider>
	);
}

export default LayoutPage;
