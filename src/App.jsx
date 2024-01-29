import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import the CSS

import * as bootstrap from "bootstrap";
import "./index.css";
import Footer from "./components/Footer/Footer";
function App() {
	return (
		<>
			<BrowserRouter basename="/marcias-react-portfolio">
				<div className="page-container">
					<div className="content-wrap">
						<Header />
						<main>
							<Routes>
								<Route path="/" element={<Home />} />
							</Routes>
						</main>
					</div>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
