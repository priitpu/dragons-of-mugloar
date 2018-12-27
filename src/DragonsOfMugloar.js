import React, { PureComponent } from 'react';
import GameScreen from './components/GameScreen/GameScreen';
import StartScreen from './components/StartScreen/StartScreen';
import {
  GAME, MESSAGES, SHOP, INVESTIGATION
} from './helpers/dragons-service';
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
      message: '',
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
    },
    reputation: {
      state: 0,
      people: 0,
      underworld: 0
    },
  }

  onStartGame = async () => {
    const initialData = await GAME.START();
    const { state } = this;
    const gameState = Object.assign({}, state.gameState, initialData, { gameOver: false });
    this.setState({ gameState });
  }

  refreshGame = async (gameId, gameState) => {
    await this.setState({ gameState });
    await this.listShop(gameId);
    await this.listAds(gameId);
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
    if (res.success === false && res.lives === 0) {
      this.onGameOver(res);
      return;
    }
    const gameState = Object.assign({}, state.gameState, {
      lives: res.lives,
      highScore: res.highScore,
      score: res.score,
      gold: res.gold,
      turn: res.turn,
      message: res.message
    });
    this.refreshGame(gameId, gameState);
  }

  onInvestigate = async (gameId) => {
    const { state } = this;
    const investigation = await INVESTIGATION.REPUTATION(gameId);
    const reputation = Object.assign({}, state.reputation, {
      people: investigation.people,
      state: investigation.state,
      underworld: investigation.underworld
    });
    const gameState = Object.assign({}, state.gameState, {
      turn: state.gameState.turn + 1,
      message: 'You investigated your reputation'
    });
    this.setState({ reputation });
    this.refreshGame(gameId, gameState);
  }

  onBuyItem = async (itemId, itemName) => {
    const { state } = this;
    const { gameState: { gameId } } = state;
    const res = await SHOP.PURCHASE(gameId, itemId);
    const gameState = Object.assign({}, state.gameState, {
      lives: res.lives,
      gold: res.gold,
      turn: res.turn,
      level: res.level,
      message: res.shoppingSuccess ? `Bought ${itemName}` : null
    });
    this.refreshGame(gameId, gameState);
  }

  onGameOver = (res) => {
    const { state } = this;
    const gameState = Object.assign({}, state.gameState, res, {
      gameOver: true
    });
    this.setState({ gameState });
  }

  render() {
    const {
      gameState: {
        gameId,
        gameOver
      },
      gameState,
      adsState,
      shopState,
      reputation,
    } = this.state;
    return (
      <div className="DragonsOfMugloar">
        {
          gameId && !gameOver
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
                reputation={reputation}
                onInvestigate={this.onInvestigate}
              />
            )
            : <StartScreen onStartGame={this.onStartGame} gameOver={gameOver} />
        }
      </div>
    );
  }
}

export default DragonsOfMugloar;
