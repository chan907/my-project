import React from 'react';
import '../styles/attendance.css';

const Attendance = () => {
  const attendanceData = [
    { subject: 'Computer Networks', total: 40, attended: 36, percentage: 90 },
    { subject: 'Automation testing', total: 35, attended: 30, percentage: 85.7 },
    { subject: 'Software Engineering', total: 30, attended: 24, percentage: 80 },
    { subject: 'Web Development', total: 45, attended: 42, percentage: 93.3 },
    { subject: 'Full-stack Backend Development ', total: 38, attended: 28, percentage: 73.6 },
    { subject: 'DevOps', total: 42, attended: 34, percentage: 80.9 },
  ];

  return (
    <div>
      <h1 className="page-title">Attendance Overview</h1>
      
      <div className="attendance-stats">
        <div className="stat-card">
          <h4>Overall Attendance</h4>
          <p className="value">84.5%</p>
        </div>
        <div className="stat-card">
          <h4>Total Present</h4>
          <p className="value">194</p>
        </div>
        <div className="stat-card">
          <h4>Total Absent</h4>
          <p className="value">36</p>
        </div>
        <div className="stat-card">
          <h4>Classes Left</h4>
          <p className="value">12</p>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Total Classes</th>
              <th>Attended</th>
              <th>Percentage</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((item, index) => (
              <tr key={index}>
                <td>{item.subject}</td>
                <td>{item.total}</td>
                <td>{item.attended}</td>
                <td>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                  {item.percentage}%
                </td>
                <td>
                  <span className={`status-badge ${item.percentage >= 85 ? 'status-good' : item.percentage >= 75 ? 'status-warning' : 'status-danger'}`}>
                    {item.percentage >= 85 ? 'Excellent' : item.percentage >= 75 ? 'Good' : 'Low'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
