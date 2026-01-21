import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeUpload from '../components/ResumeUpload';

function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome to AI Job Tracker</h2>

      <ResumeUpload />

      <br />
      <button onClick={() => navigate('/jobs')}>
        Continue to Jobs
      </button>
    </div>
  );
}

export default Login;
