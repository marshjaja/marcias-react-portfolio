import React from "react";
import Profile1 from "../../assets/LinkedIn-c-round.png";
import "./Home.style.css";
function Home() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 mb-3 d-flex justify-content-center mt-3">
						<div className="col-lg-6 mb-3 d-flex justify-content-center mt-3">
							<div className="image-container-wrapper">
								<div className="image-container">
									<img
										src={Profile1}
										alt="Profile picture of Marcia Mijnhijmer"
										className="round-image"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mb-3 d-flex justify-content-center">
						<div className="p-5 mb-4  rounded-3">
							<div className="container-fluid py-5">
								<h1 className="display-5 fw-bold home-text">
									Marcia Mijnhijmer
								</h1>
								<p className="col-md-8 fs-5 ">Aspiring Frontend Developer</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
