import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CoursesPage(props) {
	const [courses, setCourses] = useState(courseStore.getCourses());

	useEffect(() => {
		courseStore.addChangeListener(onChange);
		if (courseStore.getCourses().length === 0) loadCourses();

		return () => courseStore.removeChangeListener(onChange);
	}, []);

	const onChange = () => {
		setCourses(courseStore.getCourses());
	};

	const onDelete = id => {
		deleteCourse(id).then(toast.error("Course deleted!"));
	};

	return (
		<>
			<h2>Courses</h2>
			<Link to="/course" className="btn btn-primary">
				Add Course
			</Link>
			<CourseList courses={courses} deletCourse={onDelete} />
		</>
	);
}

export default CoursesPage;
