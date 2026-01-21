import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Jobs from './pages/Jobs';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import SidebarChat from './components/SidebarChat';

import { JobProvider } from './context/JobContext';
import { ResumeProvider } from './context/ResumeContext';

function App() {
  return (
    <ResumeProvider>
      <JobProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </JobProvider>
    </ResumeProvider>
  );
}

export default App;
