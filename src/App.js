import React, { useState } from 'react';
import Student from './components/Student';
import Course from './components/Course';
import Enrollment from './components/Enrollment';

const App = () => {
    const [enrollments, setEnrollments] = useState([]);
    const students = [{ id: 1, name: 'ARUN' }, { id: 2, name: 'AMAL' }];
    const courses = [
        { id: 1, title: 'MBA', description: 'MASTER OF BUSSINESS MANAGEMENT' },
        { id: 2, title: 'MCA', description: 'MASTER OF COMPUTER APPLUCATION' },
    ];

    const enroll = (studentId, courseId) => {
        const student = students.find(s => s.id === studentId);
        const course = courses.find(c => c.id === courseId);
        
        if (student && course) {
            setEnrollments([...enrollments, { studentName: student.name, courseTitle: course.title }]);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Student Course Enroller</h1>
            <h2>Students</h2>
            {students.map(student => (
                <Student key={student.id} student={student} enroll={(courseId) => enroll(student.id, courseId)} />
            ))}
            <h2>Courses</h2>
            {courses.map(course => (
                <Course key={course.id} course={course} enroll={(studentId) => enroll(studentId, course.id)} />
            ))}
            <Enrollment enrollments={enrollments} />
        </div>
    );
}

export default App;