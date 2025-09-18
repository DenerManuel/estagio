const DEFAULT_CONTAINER_ID = 'game-container';
const DEFAULT_ERROR_MESSAGE = 'Ocorreu um erro no jogo. Por favor, recarregue a página.';

export const handleCriticalFailure = (gameContainerID = DEFAULT_CONTAINER_ID) => {
  const gameContainer = document.getElementById(gameContainerID);
  if (!gameContainer) return;

  gameContainer.innerHTML = _generateErrorHTML();
}

const _generateErrorHTML = (customMessage = DEFAULT_ERROR_MESSAGE) => {
  return `
      <div class="game-error">
        <h2>Erro crítico</h2>
        <p>${customMessage}</p>
        <button onclick="window.location.reload()">Recarregar</button>
      </div>
    `;
}