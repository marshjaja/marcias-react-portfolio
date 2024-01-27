import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter basename="/marcias-react-portfolio">
				<main>
					<Routes></Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
