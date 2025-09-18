export const validateGameCategories = (gameCategories) => {
  if (!gameCategories?.length) {
    throw new Error('Nenhuma categoria fornecida.');
  }
}