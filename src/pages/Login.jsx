import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🔥 Login button clicked ");

    try {
      const res = await fetch('http://backend-container:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      console.log("Response received:", res);

      const data = await res.json();
      console.log("Data:", data);

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      alert("Login successful");

      onLogin(); // optional
      navigate('/dashboard');

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };  

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>EduConnect</h1>
          <p>Student Portal Login</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="student@college.edu" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login to Portal
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;