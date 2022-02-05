import React from 'react';
import Score from './Score';

function ScoreContainer(props) {
  return (
    <div className='ScoreContainer'>
      <Score scoreType='Current Score' score={props.currentScore} />
      <Score scoreType='High Score' score={props.highScore} />
    </div>
  );
}

export default ScoreContainer;
