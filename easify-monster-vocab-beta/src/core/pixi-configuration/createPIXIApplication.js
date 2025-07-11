import { App } from "../../app/App.js";
import { applyStyles } from "./applyStyles.js";

export function createPIXIApplication() {
  try {
    const app = new App();
    applyStyles(app.view);
    return app
  } catch (error) {
    throw new Error(`Falha na criação da aplicação PIXI: ${error.message}`);
  }
}