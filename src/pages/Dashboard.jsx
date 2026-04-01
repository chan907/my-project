import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { Percent, BookOpen, CreditCard } from 'lucide-react';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <div className="welcome-banner">
        <h2>Welcome back, Student</h2>
        <p>You have 3 classes today. Your next class is Computer Networks at 10:00 AM.</p>
      </div>

      <div className="stats-grid">
        <DashboardCard 
          title="Attendance" 
          value="85%" 
          icon={Percent} 
          color="#4c51bf" 
        />
        <DashboardCard 
          title="Enrolled Courses" 
          value="6" 
          icon={BookOpen} 
          color="#38a169" 
        />
        <DashboardCard 
          title="Pending Fees" 
          value="15,000" 
          icon={CreditCard} 
          color="#e53e3e" 
        />
      </div>

      <div className="recent-activity">
        <h3>Recent Notices</h3>
        <div style={{ padding: '1rem', borderLeft: '4px solid #667eea', background: '#f7fafc', marginBottom: '1rem', borderRadius: '0 0.5rem 0.5rem 0' }}>
          <h4 style={{ margin: '0 0 0.25rem 0' }}>Mid-Term Examination Schedule</h4>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#718096' }}>The mid-term exams will start from March 15th. Please check the notices section for the full timetable.</p>
        </div>
        <div style={{ padding: '1rem', borderLeft: '4px solid #38a169', background: '#f7fafc', borderRadius: '0 0.5rem 0.5rem 0' }}>
          <h4 style={{ margin: '0 0 0.25rem 0' }}>New Course Material Uploaded</h4>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#718096' }}>Prof. Reetika kerketta has uploaded new lecture notes for Full-stack Backend Development.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
