import React, { useEffect, useState } from 'react';
import { api } from '../shared/api/client';

export default function Home() {
  const [status, setStatus] = useState<string>('loading...');
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    api.get('/api/health')
      .then(res => {
        setStatus(res.data.status);
        setTime(res.data.timestamp);
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section>
      <h2>Welcome</h2>
      <p>Backend health status: <strong>{status}</strong></p>
      {time && <p>Timestamp: {new Date(time).toLocaleString()}</p>}
    </section>
  );
}
