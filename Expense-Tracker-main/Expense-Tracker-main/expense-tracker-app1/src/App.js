import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowData from "./components/ShowData";
import AddExpense from "./components/AddExpense";
import { getDataFromServer } from "./service/service";

function App() {
	// console.log(getDataFromServer());
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ShowData></ShowData>} />
					<Route path="/add" element={<AddExpense></AddExpense>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
