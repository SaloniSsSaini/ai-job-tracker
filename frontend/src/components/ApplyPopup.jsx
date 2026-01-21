import React from 'react';

function ApplyPopup({ job, onClose }) {
  return (
    <div style={{ border: '2px solid black', padding: 20 }}>
      <p>
        Did you apply to <b>{job.title}</b> at <b>{job.company}</b>?
      </p>

      <button>Yes, Applied</button>
      <button>No, Just Browsing</button>
      <button>Applied Earlier</button>

      <br /><br />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ApplyPopup;
