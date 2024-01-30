import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function ProjectGallery() {
	return (
		<>
			<div className="container">
				<div className="row">
					<h3 className="header-text text-center mb-4">
						<span className="underline-text">Project Gallery</span>
					</h3>

					<div className="col-lg-4 mb-3">
						<ProjectCard />
					</div>
					<div className="col-lg-4 mb-3">
						<ProjectCard />
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectGallery;
