import React from 'react';
import { applyJob } from '../services/api';
import { useJobs } from '../context/JobContext';

function JobCard({ job }) {
  const { applyJob: saveLocal } = useJobs();

  const handleApply = () => {
    window.open(job.applyLink, '_blank');

    applyJob({ jobId: job.id, status: 'Applied' });
    saveLocal({ jobId: job.id, status: 'Applied' });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
      <h3>{job.title}</h3>
      <p>{job.company} • {job.location}</p>

      {job.matchScore && (
        <p>
          Match Score:
          <b style={{ color: job.matchScore > 70 ? 'green' : 'orange' }}>
            {' '} {job.matchScore}%
          </b>
        </p>
      )}

      <button onClick={handleApply}>Apply</button>
    </div>
  );
}

export default JobCard;
