import React from "react";
import Image1 from "../../assets/Australia.jpeg";
import "../../components/ProjectCard/ProjectCard.styles.css";

function ProjectCards(props) {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="card-background">
							<div className="card">
								<div className="img-container">
									<img
										className="image card-img-top"
										src={Image1}
										alt="Project"
									/>
									<div className="overlay">
										<button className="btn btn-outline-secondary btn-custom btn-sm">
											<i className="fas fa-arrow-up-right-from-square">
												&nbsp;View project
											</i>
										</button>
									</div>
								</div>
								<div className="card-body">
									<h5 className="card-title">Project</h5>
									<p className="card-text">Made with: &nbsp;&nbsp;</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectCards;
