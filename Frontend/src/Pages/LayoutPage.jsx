import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Router/Routes";
import store from "../store/store";
import { Provider } from "react-redux";
function LayoutPage() {
	return (
		<Provider store={store}>
			<Router>
				<Navbar/>

				<Container
					maxWidth="xl"
					sx={{
						width: "100%",
						mt: "130px",
						overflowY: "hidden",
					}}
				>
					<Routes />
				</Container>
			</Router>
		</Provider>
	);
}

export default LayoutPage;
