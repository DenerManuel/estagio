export function createTitle(categoryTitle, app) {
  const TITLE_OPTIONS = _createTitleOptions();
  
  const title = new PIXI.Text(categoryTitle, TITLE_OPTIONS)
  _positionTitle(title, app);

  return title;
}
const _createTitleOptions = () => {
  return {
    fontFamily: 'Lato',
    fontSize: 40,
    fill: 0xFFFFFF,
    align: 'center',
    dropShadow: true,
    dropShadowDistance: 2,
    dropShadowBlur: 4
  }
}
const _positionTitle = (title, app) => {
  const HORIZONTAL_POSITION = app.screen.width / 2;
  const VERTICAL_POSITION = app.screen.height / 2 - 230

  title.anchor.set(0.5);
  title.position.set(HORIZONTAL_POSITION, VERTICAL_POSITION);
}