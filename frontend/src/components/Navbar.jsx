
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: 10, background: '#eee' }}>
      <Link to="/jobs" style={{ marginRight: 10 }}>
        Jobs
      </Link>
      <Link to="/dashboard">
        Dashboard
      </Link>
    </nav>
  );
}

export default Navbar;
