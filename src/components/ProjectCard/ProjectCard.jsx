import React from "react";
import "../../components/ProjectCard/ProjectCard.styles.css";

function ProjectCards(props) {
	return (
		<>
			<div className="container mx-3">
				<div className="row">
					<div className="col">
						<div className="card-container">
							<div className="card-background">
								<div className="card h-100">
									<div className="img-container">
										<img src={props.img} className="card-img-top" alt="..." />
										<div className="overlay">
											<a
												href={props.url}
												className="btn btn-outline-secondary btn-custom btn-sm"
												target="_blank"
												rel="noopener noreferrer"
											>
												<i className="fas fa-arrow-up-right-from-square">
													&nbsp;View project
												</i>
											</a>
										</div>
										<div className="card-body">
											<h5 className="card-title text-center">{props.title}</h5>
											<p className="card-text text-center">
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</p>
										</div>
									</div>
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
