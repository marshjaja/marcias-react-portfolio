import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function ProjectGallery() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 mb-3">
						<ProjectCard />
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectGallery;
