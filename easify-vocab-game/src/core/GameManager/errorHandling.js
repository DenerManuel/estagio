export function handleCriticalFailure(gameContainerID) { // Caso ocorra um erro crítico, exibe uma mensagem de erro na tela
  const gameContainer = document.getElementById(gameContainerID);
  if (gameContainer) {
    gameContainer.innerHTML = _generateErrorHTML();
  }
}

const _generateErrorHTML = () => {
  return `
      <div class="erro-jogo">
        <h2>Erro ao carregar o jogo</h2>
        <p>Recarregue a página ou tente novamente mais tarde</p>
      </div>
    `;
}