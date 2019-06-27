import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

const ManageCoursePage = props => {
	const [course, setCourse] = useState({
		id: null,
		slug: "",
		title: "",
		authorId: null,
		category: ""
	});

	const handleChange = ({ target }) => {
		setCourse({
			...course,
			[target.name]: target.value
		});
	};

	const handleSumbit = event => {
		event.preventDefault();
		courseApi.saveCourse(course);
	};
	return (
		<>
			<h2>Manage Course</h2>
			<CourseForm
				course={course}
				onChange={handleChange}
				onSubmit={handleSumbit}
			/>
		</>
	);
};

export default ManageCoursePage;
