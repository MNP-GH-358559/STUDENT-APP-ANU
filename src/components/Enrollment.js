import React from 'react';

const Enrollment = ({ enrollments }) => {
    return (
        <div>
            <h2>Enrollments</h2>
            <ul>
                {enrollments.map((enrollment, index) => (
                    <li key={index}>{enrollment.studentName} enrolled in {enrollment.courseTitle}</li>
                ))}
            </ul>
        </div>
    );
}

export default Enrollment;