import React from 'react';
import PropTypes from 'prop-types';
import MessageManager from '../MessageManager/MessageManager';
import './Player.css';

const Player = ({ gameState, reputation, onInvestigate }) => {
  const {
    lives, gold, level,
    score, highScore, turn,
    message, gameId
  } = gameState;
  const { state, people, underworld } = reputation;
  return (
    <div className="Player">
      <div className="Player__stats">
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
      <MessageManager message={message} />
      <button onClick={() => onInvestigate(gameId)} type="button">INVESTIGATE</button>
    </div>
  );
};

Player.propTypes = {
  gameState: PropTypes.shape().isRequired,
  reputation: PropTypes.shape().isRequired,
  onInvestigate: PropTypes.func.isRequired,
};

export default Player;
