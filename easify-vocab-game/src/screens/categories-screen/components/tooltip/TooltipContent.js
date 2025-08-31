import { TooltipItemTexts } from "./TooltipItemTexts.js";
import { TooltipTitle } from "./TooltipTitle.js";

/**
 * Representa o conteúdo de uma tooltip de categoria.
 * Contém o título e os textos dos itens da categoria.
 */
export class TooltipContent {
  tooltipTitle = null
  tooltipItemTexts = null

  /**
   * Cria uma instância do TooltipContent.
   * @param {Object} category - Categoria com título e itens.
   */
  constructor(category) {
    this.tooltipTitle = new TooltipTitle(category.title)
    this.tooltipItemTexts = new TooltipItemTexts(category.items)
  }
}