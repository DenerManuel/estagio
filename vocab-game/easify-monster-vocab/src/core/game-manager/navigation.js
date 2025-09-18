import { NavigationManager } from "../NavigationManager.js";

export async function prepareNavigation() {
  return NavigationManager.getInstance();
}