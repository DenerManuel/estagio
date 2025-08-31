import { App } from '../../../../app/App.js';
import { CompletedScreen } from '../../../completed-screen/CompletedScreen.js';

export function showCompletedScreen(gameScreen) {
  _removeGameScreenOfAppStage(gameScreen);

  const completedScreen = new CompletedScreen(gameScreen.totalScore);
  App.getInstance().stage.addChild(completedScreen);
}

function _removeGameScreenOfAppStage(gameScreen) {
  App.getInstance().stage.removeChild(gameScreen);
}
