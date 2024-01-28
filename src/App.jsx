import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import "./index.css";
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
