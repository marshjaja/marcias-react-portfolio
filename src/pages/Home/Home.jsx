import React, { useState, useEffect } from "react";
import Profile1 from "../../assets/LinkedIn-c-round.png";
import data from "../../../data/IconData.json";
import "./Home.style.css";
import Card from "../../components/Card/Card";

function Home(props) {
	const [tagLineText, setTagLineText] = useState("Aspiring Frontend Developer");
	const tagLineTextOptions = [
		"Web Developer",
		"Career Switcher",
		"Frontend Web Developer",
		"Head Pastry Chef",
		"Crafter",
		"Skateboarder",
		"Footballer",
	];

	useEffect(() => {
		let index = 0;
		const indexIdCheck = setInterval(() => {
			setTagLineText(tagLineTextOptions[index]);
			index++;

			if (index === tagLineTextOptions.length) {
				index = 0;
			}
		}, 1000);

		return () => clearInterval(indexIdCheck);
	}, []);
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 mb-3 d-flex justify-content-center mt-4">
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
						<div className=" sm-px-5 mb-4 rounded-3">
							<div className="container-fluid sm-py-1 py-5">
								<h1 className="display-5 fw-bold home-text">
									Marcia Mijnhijmer
								</h1>
								<p className="col-md-8 tag-line-text">{tagLineText}</p>
								<article>
									<h5>
										Welcome to my portfolio page!
										<br />
										Former Head Pastry Chef turned tech enthusiast and native
										Dutch speaker. <br />
										Fueled by a thirst for knowledge, I'm a proud graduate of
										the Code First Girls Full Stack Degree, currently polishing
										my skills in the edX Frontend Web Development Bootcamp.{" "}
										<br />
										Eager and equipped for my inaugural role in the tech world.
									</h5>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h1 className="text-center pb-5 pt-5">TECHNICAL SKILLS</h1>
			<div className="container-fluid custom-bg">
				<div className="row">
					{data.map((icon, index) => (
						<div className="col-lg-2 col mb-3" key={index}>
							<Card
								url={icon.url}
								width={icon.width}
								height={icon.height}
								title={icon.title}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Home;
