import { CardBackground } from './CardBackground.js'
import { CardImage } from './CardImage.js'
import { CardTitle } from './CardTitle.js'
import { CardTooltip } from './CardTooltip.js'

export class CustomCard extends PIXI.Container {
  constructor(category, cardSettings = {}) {
    super();
    this.category = category;
    this.settings = {
      width: cardSettings.width || 150,
      height: cardSettings.height || 150,
      backgroundColor: cardSettings.backgroundColor || 0xFFFFFF,
    }

    this._addComponents();
    this._configureInteraction();
  }

  _addComponents() {
    this._addBackground();
    this._addImage();
    this._addTitle()
  }

  _addBackground() {
    this.background = new CardBackground(
      this.settings.width,
      this.settings.height,
      0, // Border radius
      this.settings.backgroundColor
    );
    this.addChild(this.background);
  }

  _addImage() {
    const IMAGE_URL = `assets/categories/${this.category.title}/${this.category.items[0].image}`;
    this.image = new CardImage(
      IMAGE_URL,
      this.settings.width,
      this.settings.height
    );
    this.background.addChild(this.image);
    this._adjustImage(this.image)
    this.background._createBackground();
  }
  _adjustImage(image) {
    const containerWidth = this.settings.width; // Ajuste para alinhar com o background
    const containerHeight = this.settings.height;

    image.width = containerWidth;
    image.height = containerHeight;

    image.anchor.set(0.5); // Centraliza o ponto de ancoragem
    image.position.set(this.settings.width / 2, this.settings.height / 2); // Centraliza no container
  }

  _addTitle() {
    this.title = new CardTitle(
      this.category.title,
      this.settings.width,
      this.settings.height
    );
    this.addChild(this.title);
  }

  _addTooltip() {
    this.tooltip = new CardTooltip(
      this.category.items,
      this.settings.width
    );
    this.tooltip.visible = false;
    this.addChild(this.tooltip);
  }

  _configureInteraction() {
    this.eventMode = 'dynamic';
    this.cursor = 'pointer';

    this.on('pointerover', () => {
      //this.tooltip.visible = true;
      this.background.changeBorderColor(0xFB7302);
    });

    this.on('pointerout', () => {
      //this.tooltip.visible = false;
      this.background.changeBorderColor(0xA9A9A9);
    });

    // this.on('click', () => {
    //   //this.tooltip.visible = false;
    //   console.log("Testando")
    // });
  }
}