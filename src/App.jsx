import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
	return (
		<>
			<BrowserRouter basename="/marcias-react-portfolio">
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
