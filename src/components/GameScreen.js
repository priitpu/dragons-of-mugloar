import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AdBoard from './AdBoard';
import Player from './Player';
import GameOverScreen from './GameOverScreen';
import './GameScreen.css';

class GameScreen extends PureComponent {
  state = {

  }

  render() {
    const {
      listAds, adsState,
      gameState, onSolveAd
    } = this.props;
    const { gameOver } = gameState;
    return (
      <>
        {!gameOver
          ? (
            <div className="GameScreen">
              <Player gameState={gameState} />
              <AdBoard
                listAds={listAds}
                adsState={adsState}
                onSolveAd={onSolveAd}
              />
            </div>
          )
          : <GameOverScreen />
        }
      </>
    );
  }
}

GameScreen.propTypes = {
  listAds: PropTypes.func.isRequired,
  onSolveAd: PropTypes.func.isRequired,
  adsState: PropTypes.shape().isRequired,
  gameState: PropTypes.shape().isRequired,
};

export default GameScreen;
