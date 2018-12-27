import React from 'react';
import PropTypes from 'prop-types';
import './StartScreen.css';

const StartScreen = ({ onStartGame, gameOver }) => (
  <div className="StartScreen">
    { gameOver ? <h1>GAME OVER! Start a new one?</h1> : <h1>DRAGONS OF MUGLOAR</h1> }
    <button type="button" onClick={() => onStartGame()}>START GAME</button>
  </div>
);

StartScreen.defaultProps = {
  gameOver: false
};

StartScreen.propTypes = {
  onStartGame: PropTypes.func.isRequired,
  gameOver: PropTypes.bool
};

export default StartScreen;
