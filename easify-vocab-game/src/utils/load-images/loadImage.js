export async function loadImage(imagePath) {
  try {
    return await PIXI.Texture.from(imagePath);
  } catch (error) {
    console.error('"Falha ao carregar a imagem', error);
  }
}
