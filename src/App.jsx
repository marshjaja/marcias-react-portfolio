import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<BrowserRouter basename="/marcias-react-portfolio">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
