import React from "react";
import { Link } from "react-router-dom";

export default function NotFountPage() {
	return (
		<div>
			<h2>Page Not Found</h2>
			<p>
				<Link to="/">Back to Home</Link>
			</p>
		</div>
	);
}
