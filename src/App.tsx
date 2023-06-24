import "./assets/styles/App.css";

import { AutocompleteResults } from "./sections/AutocompleteResults/AutocompleteResults";
import { Header } from "./sections/Header/Header";
import { Search } from "./sections/Search/Search";

function App() {
	return (
		<div className="App">
			<Header />
			<Search />
			<AutocompleteResults />
		</div>
	);
}

export default App;
