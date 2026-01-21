import React from 'react';
import { useJobs } from '../context/JobContext';

function Dashboard() {
  const { applications } = useJobs();

  return (
    <div style={{ padding: 20 }}>
      <h2>My Applications</h2>

      {applications.length === 0 && (
        <p>No applications yet</p>
      )}

      {applications.map((app, index) => (
        <div
          key={index}
          style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}
        >
          <p><b>Job ID:</b> {app.jobId}</p>
          <p><b>Status:</b> {app.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
