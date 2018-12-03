import React from 'react';
import PropTypes from 'prop-types';

const StartScreen = ({ onStartGame }) => <button type="button" onClick={() => onStartGame()}>START GAME</button>;

StartScreen.propTypes = {
  onStartGame: PropTypes.func.isRequired
};

export default StartScreen;
