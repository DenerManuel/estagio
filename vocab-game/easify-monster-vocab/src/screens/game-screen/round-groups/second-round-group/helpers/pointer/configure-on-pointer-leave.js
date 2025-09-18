import { App } from '../../../../../../app/App.js';
import { onPointerLeave } from './on-pointer-leave.js';

export function configureOnPointerLeave(secondRoundGroupInstance) {
  // O segundo argumento do addEventListener deve ser uma função (o listener).
  // Envolvemos a chamada a `onPointerLeave` em uma função anônima para que ela
  // seja executada somente quando o evento 'pointerleave' ocorrer.
  const handlePointerLeave = () => {
    onPointerLeave({
      cards: secondRoundGroupInstance.cards,
      app: secondRoundGroupInstance.app,
      onDrop: (card) => secondRoundGroupInstance._handleCardDrop(card),
    });
  };
  App.getInstance().view.addEventListener('pointerleave', handlePointerLeave);
}
