import React from 'react';
import '../styles/dashboard.css';

const DashboardCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="dashboard-card">
      <div className="card-icon" style={{ backgroundColor: `${color}20`, color: color }}>
        <Icon size={24} />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p className="value">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
