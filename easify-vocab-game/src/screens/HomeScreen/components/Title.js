import { Theme } from "../../../styles/theme.js"

export function createTitle(app) {
  const TITLE_OPTIONS = _createTitleOptions();
  
  const title = new PIXI.Text('Easify Vocab', TITLE_OPTIONS)
  _positionTitle(title, app);

  return title;
}
const _createTitleOptions = () => {
  return {
    fontFamily: 'Lato',
    fontSize: Theme.Fonts.InitialScreen.titleFontSize,
    fill: Theme.Colors.InitialScreen.titleTextColor,
    align: 'center',
    dropShadow: true,
    dropShadowDistance: 2,
    dropShadowBlur: 4
  }
}
const _positionTitle = (title, app) => {
  const HORIZONTAL_POSITION = app.screen.width / 2;
  const VERTICAL_POSITION = app.screen.height / 2 - 150

  title.anchor.set(0.5);
  title.position.set(HORIZONTAL_POSITION, VERTICAL_POSITION);
}