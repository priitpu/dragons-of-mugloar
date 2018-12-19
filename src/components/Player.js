import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';

const Player = ({ gameState, reputation }) => {
  const {
    lives, gold, level,
    score, highScore, turn
  } = gameState;
  const { state, people, underworld } = reputation;
  return (
    <div className="Player">
      <div className="Player__stats">
        <h3>Stats</h3>
        <p>Lives: {lives}</p>
        <p>Score: {score}</p>
        <p>Gold: {gold}</p>
        <p>Level: {level}</p>
      </div>
      <div className="Player__reputation">
        <h3>Reputation</h3>
        <p>State: {state.toFixed(1)}</p>
        <p>People: {people.toFixed(1)}</p>
        <p>Underworld: {underworld.toFixed(1)}</p>
      </div>
      <p>Turn: {turn}</p>
      <p>Highscore: {highScore}</p>
    </div>
  );
};

Player.propTypes = {
  gameState: PropTypes.shape().isRequired,
  reputation: PropTypes.shape().isRequired
};

export default Player;
