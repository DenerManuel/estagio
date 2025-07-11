export function updateFooter(footerTitle, footerQuantity, category, currentIndex) {
  const ITEM_NUMBER = currentIndex + 1;
  const TOTAL_ITEMS = category.items.length;

  footerTitle.text = `${category.title}`;
  footerQuantity.text = `${ITEM_NUMBER} / ${TOTAL_ITEMS}`
}