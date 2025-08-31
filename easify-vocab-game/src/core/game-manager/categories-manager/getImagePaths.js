export const getImagePaths = (gameCategories) => {
  return gameCategories.flatMap(category =>
    category.items.map(item =>
      `assets/categories/${encodeURIComponent(category.title)}/${encodeURIComponent(item.image)}`
      // assets/categories/${encodeURIComponent(category.title)}/${encodeURIComponent(item.image)}`
    )
  );
}