import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<div className="root-layout">
			<header>
				<nav className="navbar navbar-expand-lg">
					<h1 className="navbar-brand">Marcia Mijnhijmer</h1>
					<div className="container-fluid">
						<button
							className="navbar-toggler mb-2 custom-toggle"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarContent"
							aria-controls="navbarContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon custom-span"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarContent">
							<div className="navbar-nav ms-auto">
								<NavLink className="nav-link" to="/">
									Home
								</NavLink>
								<NavLink className="nav-link" to="about">
									Project gallery
								</NavLink>
								<NavLink className="nav-link" to="contact">
									Contact
								</NavLink>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Header;
