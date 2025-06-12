import { handleCriticalFailure } from "./errorHandling.js";

export async function loadCategories(gameCategories, gameContainerID) {
  _validateParameters(gameCategories, gameContainerID)

  try {
    const imagePaths = _getImagePaths(gameCategories);
    await _loadAssets(imagePaths);
    console.log("Todas as categorias foram carregadas com sucesso.");
    return true;
  } catch (error) {
    console.error("Erro ao carregar as categorias:", error);
    handleCriticalFailure(gameContainerID);
    throw error
  }
}
const _validateParameters = (gameCategories, gameContainerID) => {
  if (!gameCategories?.length || !gameContainerID) {
    throw new Error('Parâmetros inválidos para loadCategories.');
  }
}
const _getImagePaths = (gameCategories) => {
  return gameCategories.flatMap(category =>
    category.items.map(item =>
      `assets/categories/${encodeURIComponent(category.title)}/${encodeURIComponent(item.image)}`
    )
  );
}

async function _loadAssets(imagePaths) {
  if (!imagePaths.length) return;

  try {
    await PIXI.Assets.load(imagePaths);
  } catch (error) {
    console.error('"Falha ao carregar os Assets', error);
    throw new Error('"Falha ao carregar os Assets');
  }
}