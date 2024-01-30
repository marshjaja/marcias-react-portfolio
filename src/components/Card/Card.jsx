import React from "react";
import Image1 from "../../assets/Australia.jpeg";
import "../../components/Card/Card.styles.css";

function Card(props) {
	return (
		<>
			<div className="container d-flex justify-content-center">
				<div className="row">
					<div className="col text-center">
						<div className="card-1 d-flex flex-column align-items-center">
							<div className="img-container">
								<img
									src={props.url}
									width={props.width}
									height={props.height}
									alt={props.title}
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">{props.title}</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
