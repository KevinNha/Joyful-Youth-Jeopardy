import React, { useState, useEffect } from 'react';
import JeopardyBox from '../JeopardyBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './Main.css'

function Main() {
  const [popup, setPopup] = useState(true);

  const renderSquare = (squareNum, text, question) => {
    return <JeopardyBox cName = {squareNum} question = {question}> {text}</JeopardyBox>
  }

  const handleCloseClick = () => {
    if (popup) {
      document.getElementById('popup').classList.remove('active');
      document.getElementById('popup').classList.add('inactive');
      document.getElementById('question').innerText = "";
      setPopup(false);
    }
    setPopup(true);
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      handleCloseClick();
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => window.addEventListener('keydown', handleKeyPress);
  },[])

  return (
    <>
    <div id="popup" className="center inactive">
      <FontAwesomeIcon icon={faTimes} className="icon" onClick={handleCloseClick}/>
      <span id="question"></span>
    </div>
    <div className="gameboard">
      <button className="gameSquare-category1 title">
        <span>BIBLICAL FIGURES</span>
      </button>
      <button className="gameSquare-category2 title">
        <span>GUESS THE SOUND</span>
      </button>
      <button className="gameSquare-category3 title">
        <span>BIRTHDAYS</span>
      </button>
      <button className="gameSquare-category4 title">
        <span>NONSENSE</span>
      </button>
      {renderSquare("1.1 score", "100", 
                    "<ul>" + 
                      "<li>The Red Sea</li>" +
                    "<ul>")}
      {renderSquare("1.2 score", "100",
                    "<ul>" + 
                      "<li>Listen carefully...</li>" +
                    "<ul>")}
      {renderSquare("1.3 score", "100",
                    "<ul>" + 
                      "<li>Merry Christmas!</li>" +
                    "<ul>")}
      {renderSquare("1.4 score", "100",
                    "방귀 뀌지 마! 를 영어로 하면?")}
      {renderSquare("2.1 score", "200",
                    "<ul>" + 
                      "<li>Fish</li>" +
                    "<ul>")}
      {renderSquare("2.2 score", "200",
                    "<ul>" + 
                      "<li> DOUBLE POINTS! </li>" +
                      "<li>Listen carefully...</li>" +
                    "<ul>")}
      {renderSquare("2.3 score", "200",
                    "<ul>" + 
                      "<li>Birthday is December 25th</li>" +
                    "<ul>")}
      {renderSquare("2.4 score", "200", 
                    "What can one catch that is not thrown?")}
      {renderSquare("3.1 score", "300",
                    "<ul>" + 
                      "<li>Two spies</li>" +
                    "<ul>")}
      {renderSquare("3.2 score", "300",
                    "<ul>" + 
                      "<li>Listen carefully...</li>" +
                    "<ul>")}
      {renderSquare("3.3 score", "300",
                    "<ul>" + 
                      "<li>This person was on the news</li>" +
                    "<ul>")}
      {renderSquare("3.4 score", "300", 
                    "이 세상에서 제일 빨리 왕이 된 사람은?")}
      {renderSquare("4.1 score", "400",
                    "<ul>" + 
                      "<li>This person was on the news</li>" +
                    "<ul>")}
      {renderSquare("4.2 score", "400",
                    "<ul>" + 
                      "<li>Listen carefully...</li>" +
                    "<ul>")}
      {renderSquare("4.3 score", "400",
                    "<ul>" + 
                      "<li>180cm tall</li>" +
                    "<ul>")}
      {renderSquare("4.4 score", "400", 
                    "성경 인물 중에서 장사를 제일 잘하는 사람은?")}
    </div>
    </>
  );
}

//https://www.youtube.com/watch?v=LqBmbgD_2Ig
export default Main;