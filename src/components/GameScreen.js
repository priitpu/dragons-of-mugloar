import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AdBoard from './AdBoard';
import Player from './Player';
import GameOverScreen from './GameOverScreen';
import ShopBoard from './ShopBoard';
import './GameScreen.css';

class GameScreen extends PureComponent {
  state = {

  }

  render() {
    const {
      listAds, adsState,
      gameState, onSolveAd,
      listShop, shopState,
      onBuyItem
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
              <ShopBoard
                listShop={listShop}
                shopState={shopState}
                onBuyItem={onBuyItem}
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
  listShop: PropTypes.func.isRequired,
  onSolveAd: PropTypes.func.isRequired,
  onBuyItem: PropTypes.func.isRequired,
  adsState: PropTypes.shape().isRequired,
  gameState: PropTypes.shape().isRequired,
  shopState: PropTypes.shape().isRequired,
};

export default GameScreen;
