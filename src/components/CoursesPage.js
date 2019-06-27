import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function CoursesPage(props) {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const effect = async () => {
			const data = await getCourses();
			setCourses(data);
		};
		effect();
	},[]);

	return (
		<>
			<h2>Courses</h2>
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Author ID</th>
						<th>Category</th>
					</tr>
				</thead>
				<tbody>
					{courses.map(course => {
						return (
							<tr key={course.id}>
								<td>{course.title}</td>
								<td>{course.authorId}</td>
								<td>{course.category}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default CoursesPage;
