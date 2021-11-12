import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Welcome to Lia's site!</h1>
      <p>
        Hello world! I'm excited to have you here. Take a good look around you =)
      </p>
    </main>
  );
}

export default App;
