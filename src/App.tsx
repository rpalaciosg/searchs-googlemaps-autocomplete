import "./assets/styles/App.css";

import { Header } from "./sections/Header/Header";
import { Search } from "./sections/Search/Search";

function App() {
	return (
		<div className="App">
			<Header />
			<Search />
		</div>
	);
}

export default App;
