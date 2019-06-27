import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
	const [course, setCourse] = useState({
		id: null,
		slug: "",
		title: "",
		authorId: null,
		category: ""
	});

	const handleChange = ({target}) => {
		setCourse({
			...course,
			[target.name]: target.value
		});
		console.log(course);
	};
	return (
		<>
			<h2>Manage Course</h2>
			<CourseForm course={course} onChange={handleChange} />
		</>
	);
};

export default ManageCoursePage;
