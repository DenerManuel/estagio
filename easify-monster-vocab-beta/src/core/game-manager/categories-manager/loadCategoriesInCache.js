import { getImagePaths } from './getImagePaths.js'
import { loadAssets } from './loadAssets.js'
import { handleCriticalFailure } from "../../../errors/handleCriticalFailure.js";

export async function loadCategoriesInCache(gameCategories, gameContainerID) {
  try {
    const imagePaths = getImagePaths(gameCategories)
    await loadAssets(imagePaths)
    console.log("Todas as categorias foram carregadas com sucesso.");
  } catch (error) {
    console.error("Erro ao carregar as categorias:", error);
    handleCriticalFailure(gameContainerID)
    throw error
  }
}