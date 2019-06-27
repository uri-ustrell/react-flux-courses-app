import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

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
			<CourseList courses={courses} />
		</>
	);
}

export default CoursesPage;
