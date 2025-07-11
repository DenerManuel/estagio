export function pickRandomItems(category) {
  if (!category.items || !Array.isArray(category.items)) return category;
  const shuffled = [...category.items].sort(() => Math.random() - 0.5);
  return {
    ...category,
    items: shuffled.slice(0, 10)
  };
}