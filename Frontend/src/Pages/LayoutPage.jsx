import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Router/Routes";
import Navbar from "../components/Navbar/Navbar";

function LayoutPage() {
	return (
		<Router>

			<Navbar />
			<Routes />
		</Router>
	);
}

export default LayoutPage;
