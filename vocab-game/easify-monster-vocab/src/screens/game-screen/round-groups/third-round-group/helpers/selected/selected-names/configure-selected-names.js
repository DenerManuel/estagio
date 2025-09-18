const HOVER_BORDER_COLOR = 0x03bb85;

/**
 * Configura os listeners de eventos para os contêineres de nome selecionados.
 * @param {import('../../../ThirdRoundGroup2.js').ThirdRoundGroup} thirdRoundGroupInstance - A instância do grupo do terceiro round.
 */
export function configureSelectedNames(thirdRoundGroupInstance) {
  thirdRoundGroupInstance.selectedNameContainers.forEach((nameContainer) => {
    // Limpa listeners antigos para evitar duplicatas
    nameContainer.removeAllListeners();

    nameContainer.eventMode = 'dynamic';
    nameContainer.cursor = 'pointer';

    // Adiciona o listener para o clique/toque
    nameContainer.on('pointertap', () =>
      handleNameSelection(nameContainer, thirdRoundGroupInstance)
    );

    // Adiciona os efeitos de hover
    addHoverEffects(nameContainer);
  });
}

/**
 * Adiciona efeitos visuais de hover (passar o mouse) a um contêiner de nome.
 * @private
 * @param {import('../../../components/name-container/NameContainer.js').NameContainer} nameContainer - O contêiner de nome.
 */
export function addHoverEffects(nameContainer) {
  const originalBorderColor = nameContainer.settings.borderColor;

  nameContainer.on('pointerover', () => {
    nameContainer.changeBorderColor(HOVER_BORDER_COLOR);
  });

  nameContainer.on('pointerout', () => {
    nameContainer.changeBorderColor(originalBorderColor);
  });
}

/**
 * Lida com a lógica de quando um nome é selecionado pelo jogador.
 * @private
 * @param {import('../../../components/name-container/NameContainer.js').NameContainer} nameContainer - O contêiner de nome selecionado.
 * @param {import('../../../ThirdRoundGroup2.js').ThirdRoundGroup} thirdRoundGroupInstance - A instância do grupo do terceiro round.
 */
export function handleNameSelection(nameContainer, thirdRoundGroupInstance) {
  if (nameContainer.name === thirdRoundGroupInstance.selectedCard.item.name) {
    thirdRoundGroupInstance.emit('correct');
    thirdRoundGroupInstance._continueGame(nameContainer);
  } else {
    thirdRoundGroupInstance.emit('error');
  }
}
