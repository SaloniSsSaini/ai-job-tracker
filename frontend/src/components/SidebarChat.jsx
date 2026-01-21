import React, { useState } from 'react';
import { chatAI } from '../services/api';

function SidebarChat() {
  const [msg, setMsg] = useState('');
  const [reply, setReply] = useState('');

  const askAI = async () => {
    const res = await chatAI({ message: msg });
    setReply(res.data.explanation);
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        top: 100,
        width: 250,
        padding: 10,
        border: '1px solid #ccc',
        background: '#fafafa'
      }}
    >
      <h4>AI Assistant</h4>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Ask something..."
      />

      <button onClick={askAI}>Ask</button>

      {reply && <p>{reply}</p>}
    </div>
  );
}

export default SidebarChat;
