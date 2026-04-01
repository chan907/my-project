import React from 'react';
import { useNavigate } from "react-router-dom";


const MyCourses = () => {

  const navigate = useNavigate();
  const courses = [
    { id: 'CS301', name: 'Computer Networks', instructor: 'Prof. Rahul Bhole', credits: 4 },
    { id: 'CS302', name: 'Automation testing', instructor: 'Prof. Rupali Bhatkhande', credits: 4 },
    { id: 'CS303', name: 'Software Engineering', instructor: 'Prof. Ayesha Butalia', credits: 3 },
    { id: 'CS304', name: 'Web Development', instructor: 'Prof. Ishwari Raskar', credits: 3 },
    { id: 'CS305', name: 'Full-stack Backend Development', instructor: 'Prof. Reetika kerketta', credits: 4 },
    { id: 'CS306', name: 'DevOps', instructor: 'Prof. Ashvini Jadhav', credits: 4 },
  ];

  return (
    <div>
      <h1 className="page-title">My Enrolled Courses</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {courses.map(course => (
          <div key={course.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ background: '#f0f4ff', color: '#667eea', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 700 }}>{course.id}</span>
              <span style={{ color: '#718096', fontSize: '0.875rem' }}>{course.credits} Credits</span>
            </div>
            <h3 style={{ marginBottom: '0.5rem', color: '#2d3748' }}>{course.name}</h3>
            <p style={{ color: '#718096', fontSize: '0.875rem' }}>Instructor: {course.instructor}</p>
            <button 
  onClick={() => navigate(`/courses/${course.id}`)}
  style={{ 
    marginTop: '1.5rem', 
    width: '100%', 
    padding: '0.5rem', 
    background: '#f7fafc', 
    border: '1px solid #e2e8f0', 
    borderRadius: '0.5rem', 
    color: '#4a5568', 
    fontWeight: 600 
  }}
>
  View Course Material
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
