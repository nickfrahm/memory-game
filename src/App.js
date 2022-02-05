import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import ShapeContainer from './Components/ShapeContainer';
import ScoreContainer from './Components/ScoreContainer';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className='App'>
      <Header />
      <ScoreContainer currentScore={currentScore} highScore={highScore} />
      <ShapeContainer />
    </div>
  );
}

export default App;
