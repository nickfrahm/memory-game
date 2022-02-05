import React from 'react';

function Shape(props) {
  const { color, shapeType, id } = props;

  return (
    <div className={color + ' ' + shapeType + ' Shape'} id={id}>
      test
    </div>
  );
}

export default Shape;
