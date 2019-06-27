import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = props => {
	const [errors, setErrors] = useState({});
	const [course, setCourse] = useState({
		id: null,
		slug: "",
		title: "",
		authorId: null,
		category: ""
	});

	useEffect(() => {
		const slug = props.match.params.slug; //from path 'courses/:slug'
		(async () => {
			const _course = await courseApi.getCourseBySlug(slug);
			setCourse(_course);
		})();
	}, [props.match.params.slug]);

	const handleChange = ({ target }) => {
		setCourse({
			...course,
			[target.name]: target.value
		});
	};

	const isFormValid = () => {
		const _errors = {};

		if (!course.title) _errors.title = "Title is required";
		if (!course.title) _errors.authorId = "Author is required";
		if (!course.title) _errors.category = "Category is required";

		setErrors(_errors);
		//the form is valid if the _errors is empty
		return Object.keys(_errors).length === 0;
	};

	const handleSumbit = event => {
		event.preventDefault();

		if (!isFormValid()) return;

		courseApi.saveCourse(course).then(() => {
			props.history.push("/courses");
			toast.success("Course saved!");
		});
	};
	return (
		<>
			<h2>Manage Course</h2>
			<CourseForm
				course={course}
				onChange={handleChange}
				onSubmit={handleSumbit}
				errors={errors}
			/>
		</>
	);
};

export default ManageCoursePage;
