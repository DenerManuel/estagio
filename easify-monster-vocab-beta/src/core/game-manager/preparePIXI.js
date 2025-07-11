import { createPIXIApplication } from "../pixi-configuration/createPIXIApplication.js";
import { validatePIXIInitialization } from "../../validators/validatePixiInitialization.js";
import { handlePIXIError } from "../../errors/handlePIXIError.js";

// Preparação do PIXI.
export async function preparePIXI(gameContainerID) {
  const applicationContainer = document.getElementById(gameContainerID);

  try {
    const app = createPIXIApplication();
    validatePIXIInitialization(app);
    _appendCanvasToContainer(applicationContainer, app);

    return app;
  } catch (error) {
    handlePIXIError(error, gameContainerID);
    throw error;
  }
}

const _appendCanvasToContainer = (applicationContainer, app) => {
  applicationContainer.replaceChildren();
  applicationContainer.appendChild(app.view);
}