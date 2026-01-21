import React, { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  const applyJob = (job) => {
    setApplications((prev) => [...prev, { ...job, status: 'Applied' }]);
  };

  return (
    <JobContext.Provider
      value={{ jobs, setJobs, applications, applyJob }}
    >
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  return useContext(JobContext);
}
