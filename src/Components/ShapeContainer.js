import React, { useState, useEffect } from 'react';
import Shape from './Shape';
import Shapes from '../Shapes';

function ShapeContainer(props) {
  const [shapeIDsSelected, setShapeIDsSelected] = useState([]);

  const shuffleShapes = () => {
    let tempShapes = Shapes.map((s) => s);
    const areas = [
      'TL',
      'TLM',
      'TRM',
      'TR',
      'ML',
      'MLM',
      'MRM',
      'MR',
      'BL',
      'BLM',
      'BRM',
      'BR',
    ];

    areas.forEach((area) => {
      let randomNum = Math.floor(Math.random() * tempShapes.length);
      document.getElementById(tempShapes[randomNum].id).style.gridArea = area;
      tempShapes.splice(randomNum, 1);
    });
  };

  return (
    <div className='ShapeContainer box-curved-border'>
      {Shapes.map((shape) => {
        return (
          <Shape
            backgroundColor={shape.backgroundColor}
            shapeType={shape.shape}
            id={shape.id}
            shuffleShapes={shuffleShapes}
          />
        );
      })}
    </div>
  );
}

export default ShapeContainer;
