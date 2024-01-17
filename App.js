import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App() {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <p className='clock'>
      {date.toLocaleTimeString()}
    </p>
  );
}

export default App;
