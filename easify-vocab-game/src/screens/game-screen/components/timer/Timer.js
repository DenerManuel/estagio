import { gameScreenPositions } from '../../../../styles/screens-components-positions/game-screen/game-screen-components-position.js';
import { gameScreenStyles } from '../../../../styles/screens-components-styles/game-screen/game-screen-components-styles.js';

export class Timer extends PIXI.Text {
  constructor(duration) {
    super(`${duration}s`, gameScreenStyles.timer.desktop);
    this.duration = duration;
    this.initialTime = duration;
    this.remaininTime = duration;
    this.isRunning = false;
    this._setPosition();
  }

  startTimer(onFinish) {
    this.stopTimer();
    this.startTime = performance.now();
    this.isRunning = true;

    const tick = () => {
      if (!this.isRunning) return;

      const elapsed = (performance.now() - this.startTime) / 1000;
      this.remainingTime = Math.max(this.duration - elapsed, 0);
      this.text = `${Math.ceil(this.remainingTime)}s`;

      if (this.remainingTime <= 0) {
        this.isRunning = false;
        if (onFinish) onFinish();
        return;
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  stopTimer() {
    this.isRunning = false;
  }

  restartTimer(onFinish) {
    this.remainingTime = this.duration;
    this.text = `Time: ${this.duration}s`;
    this.startTimer(onFinish);
  }

  _setPosition() {
    const POSITION = gameScreenPositions.timer.desktop;
    // const POSITION_Y = gameScreenPositions.timer.desktop.y;

    this.position.set(POSITION.x, POSITION.y);
  }
}
