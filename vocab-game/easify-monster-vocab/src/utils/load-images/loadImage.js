import { Texture } from 'pixi.js';

export async function loadImage(imagePath) {
  try {
    return await Texture.from(imagePath);
  } catch (error) {
    console.error('"Falha ao carregar a imagem', error);
  }
}
