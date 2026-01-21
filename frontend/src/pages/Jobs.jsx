import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import { fetchJobs, matchJobs } from '../services/api';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const jobsRes = await fetchJobs();
      const matchRes = await matchJobs();

      setJobs(matchRes.data.length ? matchRes.data : jobsRes.data);
    }

    loadJobs();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Jobs</h2>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Jobs;
