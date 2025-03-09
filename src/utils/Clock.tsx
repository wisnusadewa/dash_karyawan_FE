import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('id-ID', { hour12: false }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('id-ID', { hour12: false }));
    }, 1000); // Update setiap 1 detik

    return () => clearInterval(interval);
  }, []);

  return <div>Time : {time}</div>;
};

export default Clock;
