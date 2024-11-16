import React from 'react';

const Student = ({ student, enroll }) => {
    return (
        <div>
            <h3>{student.name}</h3>
            <button onClick={() => enroll(student.id)}>Enroll in Course</button>
        </div>
    );
}

export default Student;