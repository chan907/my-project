import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  CalendarCheck, 
  FileText, 
  Bell, 
  CreditCard, 
  LogOut 
} from 'lucide-react';
import '../styles/sidebar.css';

const Sidebar = ({ onLogout }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        EduConnect
      </div>
      <nav className="sidebar-menu">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
          <LayoutDashboard />
          Dashboard
        </NavLink>
        <NavLink to="/courses" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
          <BookOpen />
          My Courses
        </NavLink>
        <NavLink to="/attendance" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
          <CalendarCheck />
          Attendance
        </NavLink>
        <NavLink to="/results" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
          <FileText />
          Results
        </NavLink>
        <NavLink to="/notices" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
          <Bell />
          Notices
        </NavLink>
        <NavLink to="/fees" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
          <CreditCard />
          Fees
        </NavLink>
      </nav>
      <button className="logout-btn" onClick={onLogout}>
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
