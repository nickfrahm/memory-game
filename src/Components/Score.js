import React from 'react';

function Score(props) {
  const { scoreType, score } = props;

  return (
    <div className='Score box-curved-border'>
      {scoreType}: {score}
    </div>
  );
}

export default Score;
