export function loadCardImages(gameCategory) {
  const cardImages = [];

  gameCategory.items.forEach((item) => {
    const texture = PIXI.Texture.from(`./assets/categories/${gameCategory.title}/${item.image}`);
    const image = new PIXI.Sprite(texture);

    cardImages.push(image);
  })
  return cardImages;
}