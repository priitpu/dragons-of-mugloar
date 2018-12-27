import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AdBoard from '../AdBoard/AdBoard';
import Player from '../Player/Player';
import ShopBoard from '../ShopBoard/ShopBoard';
import './GameScreen.css';

class GameScreen extends PureComponent {
  render() {
    const {
      listAds, adsState,
      gameState, onSolveAd,
      listShop, shopState,
      onBuyItem, reputation,
      onInvestigate
    } = this.props;
    return (
      <div className="GameScreen">
        <Player
          gameState={gameState}
          reputation={reputation}
          onInvestigate={onInvestigate}
        />
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
    );
  }
}

GameScreen.propTypes = {
  listAds: PropTypes.func.isRequired,
  listShop: PropTypes.func.isRequired,
  onSolveAd: PropTypes.func.isRequired,
  onBuyItem: PropTypes.func.isRequired,
  onInvestigate: PropTypes.func.isRequired,
  adsState: PropTypes.shape().isRequired,
  gameState: PropTypes.shape().isRequired,
  shopState: PropTypes.shape().isRequired,
  reputation: PropTypes.shape().isRequired
};

export default GameScreen;
