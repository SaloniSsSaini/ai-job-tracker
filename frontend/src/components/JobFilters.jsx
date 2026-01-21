import React from 'react';

function JobFilters() {
  return (
    <div style={{ padding: 10 }}>
      <input placeholder="Search role..." />

      <select>
        <option>All</option>
        <option>Remote</option>
        <option>Hybrid</option>
        <option>On-site</option>
      </select>
    </div>
  );
}

export default JobFilters;
