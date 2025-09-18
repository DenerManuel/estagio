import {
  FirstRoundGroup,
  SecondRoundGroup,
  ThirdRoundGroup,
} from '../../components/game-screen-components.js';
import { addRoundGroup, updateRoundCounter } from '../game-screen-helpers.js';

export function addFirstRoundGroup(gameScreen) {
  addRoundGroup({
    context: gameScreen,
    GroupClass: FirstRoundGroup,
    groupKey: 'firstRoundGroup',
    initArgs: [gameScreen.app, gameScreen.itemCards],
    penalty: 100,
    currentScreenName: 'firstRoundGroup',
    updateRoundFn: () => updateRoundCounter(gameScreen),
  });
}

export function addSecondRoundGroup(gameScreen) {
  addRoundGroup({
    context: gameScreen,
    GroupClass: SecondRoundGroup,
    groupKey: 'secondRoundGroup',
    initArgs: [gameScreen.app, gameScreen.category, gameScreen.itemCards],
    penalty: 0,
    currentScreenName: 'secondRoundScreen',
    updateRoundFn: () => updateRoundCounter(gameScreen),
  });
}

export function addThirdRoundGroup(gameScreen) {
  addRoundGroup({
    context: gameScreen,
    GroupClass: ThirdRoundGroup,
    groupKey: 'thirdRoundGroup',
    initArgs: [gameScreen.itemCards],
    penalty: 100,
    currentScreenName: 'thirdRoundGroup',
    updateRoundFn: () => updateRoundCounter(gameScreen),
  });
}
