import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.styles.css";

function NotFound() {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center align-items-center text-center view-height">
					<div className="col">
						<h1 className="not-found-text">
							Well, this is awkward... <br></br>The page you were looking for{" "}
							<br></br>has apparently gone on vacation.
						</h1>
						<h5>
							Luckily, the{" "}
							<Link className="custom-link" to="/">
								Homepage
							</Link>{" "}
							hasn’t taken any days off!
						</h5>
					</div>
				</div>
			</div>
		</>
	);
}

export default NotFound;
