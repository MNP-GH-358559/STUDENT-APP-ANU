import React from 'react';

const Course = ({ course, enroll }) => {
    return (
        <div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button onClick={() => enroll(course.id)}>Enroll in this Course</button>
        </div>
    );
}

export default Course;