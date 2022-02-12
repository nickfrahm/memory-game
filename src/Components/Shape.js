import React from 'react';

function Shape(props) {
  const { backgroundColor, shapeType, id, gameController } = props;

  return (
    <div
      className={backgroundColor + ' ' + shapeType + ' Shape'}
      id={id}
      onClick={gameController}
      key={id}
    ></div>
  );
}

export default Shape;
