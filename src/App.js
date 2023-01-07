import './App.css';
import React, { useState } from 'react';

function App() {
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <button onClick = {() => setScore(score + 1)}>Click me</button>
      <h1> your score is {score} </h1>
      <button onClick = {() => setScore(0)}>Reset</button>
    </div>
  );
}

export default App;
