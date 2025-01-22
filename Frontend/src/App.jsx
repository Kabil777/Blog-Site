import LayoutPage from "./Pages/LayoutPage";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
	return (
		<Provider store={store}>
			<LayoutPage />
		</Provider>
	);
}

export default App;
