/**
 * Mock de dados para categorias e itens do jogo.
 * Contém exemplos de categorias (Animais, Eletrônicos e Comidas) com seus respectivos itens.
 * Cada item possui um nome e referência para imagem (no formato webp).
 * @type {Array<Object>}
 */
export const categoriesDataMock = [
  {
    title: 'Animals',
    items: [
      { name: 'snake', image: 'snake.webp' },
      { name: 'rabbit', image: 'rabbit.webp' },
      { name: 'hawk', image: 'hawk.webp' },
      { name: 'flamingo', image: 'flamingo.webp' },
      { name: 'cat', image: 'cat.webp' },
      { name: 'koala', image: 'koala.webp' },
      { name: 'fish', image: 'fish.webp' },
      { name: 'mouse', image: 'mouse.webp' },
      { name: 'frog', image: 'frog.webp' },
      { name: 'cow', image: 'cow.webp' },
    ]
  },
  {
    title: 'Electronics',
    items: [
      { name: 'cell phone', image: 'cell_phone.webp' },
      { name: 'computer', image: 'computer.webp' },
      { name: 'case', image: 'case.webp' },
      { name: 'mouse', image: 'mouse.webp' },
      { name: 'mousepad', image: 'mousepad.webp' },
      { name: 'laptop', image: 'laptop.webp' },
      { name: 'pendrive', image: 'pendrive.webp' },
      { name: 'processor', image: 'processor.webp' },
      { name: 'tablet', image: 'tablet.webp' },
      { name: 'keyboard', image: 'keyboard.webp' },
    ]
  },
  {
    title: 'Food',
    items: [
      { name: 'burguer', image: 'burguer.webp' },
      { name: 'hot dog', image: 'hot_dog.webp' },
      { name: 'chocolate', image: 'chocolate.webp' },
      { name: 'milkshake', image: 'milkshake.webp' },
      { name: 'pancakes', image: 'pancakes.webp' },
      { name: 'pizza', image: 'pizza.webp' },
      { name: 'soup', image: 'soup.webp' },
      { name: 'ice cream', image: 'ice_cream.webp' },
      { name: 'pie', image: 'pie.webp' },
      { name: 'waffles', image: 'waffles.webp' },
    ]
  }
];