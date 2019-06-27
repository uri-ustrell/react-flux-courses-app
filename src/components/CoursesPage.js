import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage(props) {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await getCourses();
			setCourses(data);
		})();
	}, []);

	return (
		<>
			<h2>Courses</h2>
			<Link to="/course" className="btn btn-primary">
				Add Course
			</Link>
			<CourseList courses={courses} />
		</>
	);
}

export default CoursesPage;
