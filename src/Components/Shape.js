import React from 'react';

function Shape(props) {
  const { backgroundColor, shapeType, id, shuffleShapes } = props;

  return (
    <div
      className={backgroundColor + ' ' + shapeType + ' Shape'}
      id={id}
      onClick={shuffleShapes}
    ></div>
  );
}

export default Shape;
