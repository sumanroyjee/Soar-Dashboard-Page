import { CreditCard } from './CreditCard';
import type { Card } from '../../types';

interface CardSectionProps {
  cards: Card[];
}

export function CardSection({ cards }: CardSectionProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">My Cards</h2>
        <button className="text-blue-600 hover:text-blue-700">See All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <CreditCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}