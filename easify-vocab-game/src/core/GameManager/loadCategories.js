import { handleCriticalFailure } from "./errorHandling.js";

export async function loadCategories(gameCategories, gameContainerID) {
  try {
    const imagePaths = _getImagePaths(gameCategories);
    await _loadAssets(imagePaths);
    console.log("Todas as categorias foram carregadas com sucesso.");
  } catch (error) {
    console.error("Erro ao carregar as categorias:", error);
    handleCriticalFailure(gameContainerID); // Chama o método de falha crítica
  }
}
const _getImagePaths = (gameCategories) => {
  const imagePaths = [];
  gameCategories.forEach(category => {
    category.items.forEach(item => {
      const imagePath = `assets/categories/${category.title}/${item.image}`;
      imagePaths.push(imagePath);
    })

  });
  return imagePaths;
}
async function _loadAssets(imagePaths) {
  await PIXI.Assets.load(imagePaths);
}