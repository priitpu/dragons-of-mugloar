import React, { PureComponent } from 'react';
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';
import { GAME, MESSAGES, SHOP } from './helpers/dragons-service';
import './DragonsOfMugloar.css';

class DragonsOfMugloar extends PureComponent {
  state = {
    gameState: {
      gameId: null,
      lives: 0,
      gold: 0,
      level: 0,
      score: 0,
      highScore: 0,
      turn: 0,
      gameOver: false
    },
    adsState: {
      ads: [],
      isLoading: true
    },
    shopState: {
      items: [],
      isLoading: true
    }
  }

  onStartGame = async () => {
    const initialData = await GAME.START();
    const { state } = this;
    const gameState = Object.assign({}, state.gameState, initialData);
    this.setState({ gameState });
  }

  listAds = async () => {
    const { gameState: { gameId } } = this.state;
    const ads = await MESSAGES.GETALL(gameId);
    const { state } = this;
    if (!ads.gameOver) {
      const adsState = Object.assign({}, state.adsState, {
        ads: [...ads],
        isLoading: false
      });
      this.setState({ adsState });
    } else {
      this.onGameOver();
    }
  }

  listShop = async () => {
    const { gameState: { gameId } } = this.state;
    const items = await SHOP.GETALL(gameId);
    const { state } = this;
    const shopState = Object.assign({}, state.shopState, {
      isLoading: false,
      items: [...items]
    });
    this.setState({ shopState });
  }

  onSolveAd = async (adId) => {
    const { state } = this;
    const { gameState: { gameId } } = state;
    const res = await MESSAGES.SOLVE(gameId, adId);
    const gameState = Object.assign({}, state.gameState, {
      lives: res.lives,
      highScore: res.highScore,
      message: res.message,
      score: res.score,
      gold: res.gold,
      turn: res.turn
    });
    this.setState({ gameState });
    this.listAds(gameId);
  }

  onBuyItem = async (itemId) => {
    const { state } = this;
    const { gameState: { gameId } } = state;
    const res = await SHOP.PURCHASE(gameId, itemId);
  }

  onGameOver = () => {
    const { state } = this;
    const gameState = Object.assign({}, state.gameState, {
      gameOver: true
    });
    this.setState({ gameState });
  }

  render() {
    const { gameState, adsState, shopState } = this.state;
    const {
      gameState: {
        gameId,
        gameOver
      }
    } = this.state;
    return (
      <div className="DragonsOfMugloar">
        {
          gameId
            ? (
              <GameScreen
                gameState={gameState}
                listAds={this.listAds}
                adsState={adsState}
                onSolveAd={this.onSolveAd}
                gameOver={gameOver}
                listShop={this.listShop}
                shopState={shopState}
                onBuyItem={this.onBuyItem}
              />
            )
            : <StartScreen onStartGame={this.onStartGame} />
        }
      </div>
    );
  }
}

export default DragonsOfMugloar;
