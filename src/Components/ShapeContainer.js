import React, { useState, useEffect } from 'react';
import Shape from './Shape';
import Shapes from '../Shapes';

function ShapeContainer(props) {
  const [shapeIDsSelected, setShapeIDsSelected] = useState([]);

  const {
    currentScore,
    highScore,
    handleCurrentScoreChange,
    handleHighScoreChange,
  } = props;

  useEffect(() => {
    shuffleShapes();
  }, []);

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

  const checkIfClicked = (id) => {
    return shapeIDsSelected.includes(id);
  };

  const checkHighScore = () => {
    return currentScore >= highScore;
  };

  const gameController = (e) => {
    const { id } = e.target;
    if (checkIfClicked(id)) {
      if (checkHighScore()) {
        handleHighScoreChange(currentScore);
      }
      handleCurrentScoreChange(0);
      setShapeIDsSelected([]);
    } else {
      handleCurrentScoreChange(currentScore + 1);
      setShapeIDsSelected([...shapeIDsSelected, id]);
    }
    shuffleShapes();
  };

  return (
    <div className='ShapeContainer box-curved-border'>
      {Shapes.map((shape) => {
        return (
          <Shape
            backgroundColor={shape.backgroundColor}
            shapeType={shape.shape}
            id={shape.id}
            key={shape.id}
            gameController={gameController}
          />
        );
      })}
    </div>
  );
}

export default ShapeContainer;
