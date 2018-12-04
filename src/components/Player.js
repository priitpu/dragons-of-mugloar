import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';

const Player = ({ gameState }) => {
  const {
    lives, gold, level,
    score, highScore, turn
  } = gameState;
  return (
    <div className="Player">
      <p>Lives: {lives}</p>
      <p>Score: {score}</p>
      <p>Gold: {gold}</p>
      <p>Level: {level}</p>
      <p>Highscore: {highScore}</p>
      <p>Turn: {turn}</p>
    </div>
  );
};

Player.propTypes = {
  gameState: PropTypes.shape().isRequired
};

export default Player;
