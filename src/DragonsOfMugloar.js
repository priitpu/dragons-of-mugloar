import React, { PureComponent } from 'react';
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';
import { GAME } from './helpers/dragons-service';

class DragonsOfMugloar extends PureComponent {
  state = {
    gameState: {
      gameId: 0,
      lives: 0,
      gold: 0,
      level: 0,
      score: 0,
      highScore: 0,
      turn: 0
    }
  }

  onStartGame = async () => {
    const initialData = await GAME.START();
    const { state } = this;
    const gameState = Object.assign({}, state.gameState, initialData);
    this.setState({ gameState });
  }

  render() {
    const {
      gameState: {
        gameId, lives, gold,
        level, score, highScore,
        turn
      }
    } = this.state;
    return (
      <>
        {
          gameId
            ? (
              <GameScreen
                lives={lives}
                gameId={gameId}
                gold={gold}
                level={level}
                score={score}
                highScore={highScore}
                turn={turn}
              />
            )
            : <StartScreen onStartGame={this.onStartGame} />
        }
      </>
    );
  }
}

export default DragonsOfMugloar;
