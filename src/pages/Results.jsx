import React from 'react';
import ResultsTable from '../components/ResultsTable';
import '../styles/results.css';

const Results = () => {
  const resultsData = [
    { subject: 'Computer Networks', marks: 28 },
    { subject: 'Automation testing ', marks: 25 },
    { subject: 'Software Engineering', marks: 22 },
    { subject: 'Web Development', marks: 29 },
    { subject: 'Full-stack Backend Development', marks: 18 },
    { subject: 'DevOps', marks: 17 },
  ];

  return (
    <div>
      <h1 className="page-title">Internal Assessment (TA Marks)</h1>
      <p style={{ marginBottom: '1.5rem', color: '#718096' }}>Academic Session: 2025-26 | Semester: 6th</p>
      <ResultsTable results={resultsData} />
      
      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Performance Summary</h3>
        <p>Your average TA marks are <strong>24.3 / 30</strong>. You have cleared the internal assessment criteria for all subjects.</p>
      </div>
    </div>
  );
};

export default Results;
