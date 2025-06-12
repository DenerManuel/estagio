const DEFAULT_CONTAINER_ID = 'game-container';
const DEFAULT_ERROR_MESSAGE = 'Ocorreu um erro no jogo. Por favor, recarregue a página.';

export function handleCriticalFailure(gameContainerID = DEFAULT_CONTAINER_ID) {
  _validateParameter(gameContainerID);

  const gameContainer = document.getElementById(gameContainerID);
  if (!gameContainer) return;

  gameContainer.innerHTML = _generateErrorHTML();
  // gameContainer.classList.add('error-state'); // Para estilização CSS
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

const _validateParameter = (gameContainerID) => {
  if (!gameContainerID) {
    console.error('ID do contêiner ausente para exibição de erro.');
    return;
  }
}