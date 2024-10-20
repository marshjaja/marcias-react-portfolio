import React from "react";
import "./Footer.style.css";
import { Image } from "react-bootstrap";
import Logo from "../../../logo-react-portfolio.png";
function Footer() {
	return (
		<>
			<div className="main-footer ">
				<div className="row ">
					<div className="container ">
						<div className="row">
							{/* Column1 */}
							{/* <div className="col custom-col ms-5 text-dark ">
								<h4>View my Resume</h4>
								<Image src={Logo} alt="Logo" style={{ width: "50px" }} />
								<a href="/path-to-your-resume.pdf" download>
									<i className="fa fa-file-text fa-2x ms-3 "></i>
								</a>
							</div> */}
							<div className="col ms-5 section-text">
								{/* <h4 className="mb-3">View my Resume</h4> */}
								<div className="mb-3">
									<Image src={Logo} alt="Logo" style={{ width: "50px" }} />
								</div>
								<a
									href="https://docs.google.com/document/d/1ylyQ3LHYvWGoPHuBzgf1Vb3NzorMKr7z/view"
									download
									className=" custom-a mt-3"
								>
									View Resume
								</a>
							</div>

							{/* Column2 */}
							<div className="col section-text ms-4">
								<h4>Connect with Me</h4>
								<ul className="list-unstyled icon-list">
									{/* GitHub Icon */}
									<li>
										<a
											href="https://github.com/marshjaja"
											className="text-white"
										>
											<i className="fab fa-github fa-2x"></i>
										</a>
									</li>
									{/* LinkedIn Icon */}
									<li>
										<a
											href="https://www.linkedin.com/in/marcia-mijnhijmer-9a562610a/"
											className="text-white"
										>
											<i className="fab fa-linkedin fa-2x"></i>
										</a>
									</li>
									{/* Phone Icon */}
									<li>
										<a href="tel:+447553958577" className="text-white">
											<i className="fas fa-phone fa-2x"></i>
										</a>
									</li>
									{/* Envelope Icon */}
									<li>
										<a
											href="mailto:msgmijnhijmer87@hotmail.com"
											className="text-white"
										>
											<i className="fas fa-envelope fa-2x"></i>
										</a>
									</li>
								</ul>
							</div>
							{/* Column3 */}
							<div className="col section-text mx-5">
								<h4>About Me</h4>
								<p>
									Aspiring software developer, passionate about learning and
									technology.
								</p>
							</div>
						</div>
						<hr />
						<div className="row">
							<div className="col-sm">
								<div
									className="text-center p-3"
									style={{ backgroundColor: "#452958a6" }}
								>
									&copy;{new Date().getFullYear()}
									&nbsp;Marcia Mijnhijmer | All Rights Reserved.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
