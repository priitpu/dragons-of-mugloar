import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';

const Player = ({ gameState }) => {
  const { lives } = gameState;
  return (
    <div className="Player">
      <p>Lives: {lives}</p>
    </div>
  );
};

Player.propTypes = {
  gameState: PropTypes.shape().isRequired
};

export default Player;
