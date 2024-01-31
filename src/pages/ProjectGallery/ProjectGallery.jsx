import React from "react";
import ProjectCards from "../../components/ProjectCard/ProjectCard";
import projects from "../../../data/ProjectData.json";

function ProjectGallery() {
	return (
		<>
			<div className="container">
				<div className="row">
					<h3 className="header-text text-center mb-4">
						<span className="underline-text">Project Gallery</span>
					</h3>
					{projects.map((project, index) => (
						<div className="col-lg-4 mb-3" key={index}>
							<ProjectCards
								url={project.url}
								title={project.title}
								img={project.img}
								description={project.description}
								github={project.github}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default ProjectGallery;
