import { render } from '@testing-library/react';
import React from 'react';
import JeopardyBox from '../JeopardyBox';

import './Main.css'

function Main() {

  const boardSize = 4;
  const root = <div className='gameboard'></div>

  const renderSquare = (squareNum, text) => {
    return <JeopardyBox cName = {squareNum}> {text} </JeopardyBox>
  }


  return (
    <>
    <div className="gameboard">
      {renderSquare("category1", "BIBLICAL FIGURES")}
      {renderSquare("category2", "GUESS THE SOUND")}
      {renderSquare("category3", "ETC")}
      {renderSquare("category4", "ETC")}
      {renderSquare("1.1")}
      {renderSquare("1.2")}
      {renderSquare("1.3")}
      {renderSquare("1.4")}
      {renderSquare("2.1")}
      {renderSquare("2.2")}
      {renderSquare("2.3")}
      {renderSquare("2.4")}
      {renderSquare("3.1")}
      {renderSquare("3.2")}
      {renderSquare("3.3")}
      {renderSquare("3.4")}
      {renderSquare("4.1")}
      {renderSquare("4.2")}
      {renderSquare("4.3")}
      {renderSquare("4.4")}
      </div>
    </>
  );
}

export default Main;