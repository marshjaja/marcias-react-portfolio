import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<header>
			<nav>
				<h1>Marcia Mijnhijmer</h1>
				<NavLink to="/">Home</NavLink>
				<NavLink to="project-gallery">Project gallery</NavLink>
				<NavLink to="contact">Contact</NavLink>
			</nav>
		</header>
	);
}

export default Header;
