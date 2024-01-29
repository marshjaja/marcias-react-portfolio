import { BrowserRouter, Routes, Route } from "react-router-dom";
/* == styles == */
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import the CSS
import * as bootstrap from "bootstrap";
import "./index.css";
/* == components == */
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
/* == pages == */
import Home from "./pages/Home/Home";
import ProjectGallery from "./pages/ProjectGallery/ProjectGallery";

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
								<Route path="/project-gallery" element={<ProjectGallery />} />
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
