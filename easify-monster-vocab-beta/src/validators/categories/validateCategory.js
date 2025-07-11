export const validateCategory = (category) => {
  if (!category?.title || !category?.items) {
    throw new Error('Estrutura de categoria inválida.');
  }
}