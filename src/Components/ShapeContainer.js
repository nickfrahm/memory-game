import React, { useState } from 'react';
import Shape from './Shape';
import Shapes from '../Shapes';

function ShapeContainer(props) {
  const [shapeIDsSelected, setShapeIDsSelected] = useState([]);

  return (
    <div className='ShapeContainer box-curved-border'>
      {Shapes.map((shape) => {
        return (
          <Shape
            className={shape.backgroundColor + ' ' + shape.shape}
            id={shape.id}
          />
        );
      })}
    </div>
  );
}

export default ShapeContainer;
