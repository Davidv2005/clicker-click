import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Link} from 'react-router-dom'
function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <Navbar />
      {count}
      <button type='button' onClick={() => setCount (prevCount => prevCount +1)}>+</button>
    </div>
  );
}
function helper() {
  while(count >= 50) {
    setCount(count + 1)
  } 
}

export default App;
