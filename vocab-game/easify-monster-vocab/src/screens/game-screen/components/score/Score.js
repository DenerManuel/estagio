import { CustomContainer } from '../../../../components/container/CustomContainer.js';
import CustomText from '../../../../components/text/CustomText.js';
import { gameScreenPositions } from '../../../../styles/screens-components-positions/game-screen/game-screen-components-position.js';
import { gameScreenStyles } from '../../../../styles/screens-components-styles/game-screen/game-screen-components-styles.js';

export class Score extends CustomContainer {
  constructor() {
    super(null, gameScreenStyles.score.desktop);
    this.scoreText = new ScoreText();
    this.score = 0;
    this.addChild(this.scoreText);
    this._setPosition();
  }

  updateScore(score) {
    this.score = score;
    this.scoreText.text = this.score;
  }

  addScore(score) {
    this.score += score;
    this.scoreText.text = this.score;
  }

  getScore(timer) {
    return this._calculateScore(timer);
  }

  _calculateScore(timer) {
    // const secondsPassed = (Date.now() - timer.roundStart) / 1000;
    // const timeUsed = Math.min(secondsPassed, timer.initialTime);
    // let score = Math.ceil((7 - timeUsed) * 45);
    // score = Math.floor(score / 10) * 10;
    // return Math.max(score, 0);
    const timeUsed = timer.initialTime - timer.remainingTime;
    let score = Math.ceil((timer.duration - timeUsed) * 45);
    score = Math.floor(score / 10) * 10;
    return Math.max(score, 0);
  }

  _setPosition() {
    const POSITION_X = gameScreenPositions.score.desktop.x;
    const POSITION_Y = gameScreenPositions.score.desktop.y;

    this.position.set(POSITION_X, POSITION_Y);
  }
}

export class ScoreText extends CustomText {
  constructor() {
    super('0', gameScreenStyles.score.desktop);
    this._setPosition();
  }
  _setPosition() {
    const POSITION_X = gameScreenStyles.score.desktop.width / 2;
    const POSITION_Y = gameScreenStyles.score.desktop.height / 2;

    this.position.set(POSITION_X, POSITION_Y);
  }
}
// export class Score extends PIXI.Text {
//   constructor() {
//     super('Score: 0', gameScreenStyles.score.desktop);
//     this.score = 0;
//     this._setPosition();
//   }

//   updateScore(score) {
//     this.score = score
//     this.text = `Score: ${this.score}`;
//   }

//   addScore(score) {
//     this.score += score
//     this.text = `Score: ${this.score}`;
//   }

//   getScore(timer) {
//     return this._calculateScore(timer);
//   }

//   _calculateScore(timer) {
//     // const secondsPassed = (Date.now() - timer.roundStart) / 1000;
//     // const timeUsed = Math.min(secondsPassed, timer.initialTime);
//     // let score = Math.ceil((7 - timeUsed) * 45);
//     // score = Math.floor(score / 10) * 10;
//     // return Math.max(score, 0);
//     const timeUsed = timer.initialTime - timer.remainingTime;
//     let score = Math.ceil((timer.duration - timeUsed) * 45);
//     score = Math.floor(score / 10) * 10;
//     return Math.max(score, 0);
//   }

//   _setPosition() {
//     const POSITION_X = gameScreenPositions.score.desktop.x;
//     const POSITION_Y = gameScreenPositions.score.desktop.y;

//     this.position.set(POSITION_X, POSITION_Y);
//   }
// }
