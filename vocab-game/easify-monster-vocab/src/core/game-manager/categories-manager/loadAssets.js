export async function loadAssets(imagePaths) {
  if (!imagePaths.length) return;

  try {
    await PIXI.Assets.load(imagePaths);
  } catch (error) {
    console.error('"Falha ao carregar os Assets', error);
    throw new Error('"Falha ao carregar os Assets');
  }
}