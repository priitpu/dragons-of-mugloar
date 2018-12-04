import React from 'react';
import PropTypes from 'prop-types';

const StartScreen = ({ onStartGame, gameOver }) => (
  <div className="StartScreen">
    { gameOver ? <h1>GAME OVER! Start a new one?</h1> : null }
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
