import React from 'react';
import '../styles/results.css';

const ResultsTable = ({ results }) => {
  return (
    <div className="results-container">
      <table className="results-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>TA Marks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td className="marks-badge">{item.marks} / 30</td>
              <td>
                <span className={item.marks >= 12 ? 'status-pass' : 'status-fail'}>
                  {item.marks >= 12 ? 'Pass' : 'Fail'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
