import React from 'react';
import PropTypes from 'prop-types';

const StartScreen = ({ onStartGame }) => (
  <div className="StartScreen">
    <button type="button" onClick={() => onStartGame()}>START GAME</button>
  </div>
);

StartScreen.propTypes = {
  onStartGame: PropTypes.func.isRequired
};

export default StartScreen;
