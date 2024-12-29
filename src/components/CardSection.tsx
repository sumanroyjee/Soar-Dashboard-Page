import { CreditCard } from 'lucide-react';
import type { Card } from '../types';

interface CardSectionProps {
  cards: Card[];
}

export function CardSection({ cards }: CardSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">My Cards</h2>
        <button className="text-blue-600 hover:text-blue-700">See All</button>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[280px] p-6 rounded-xl text-white"
            style={{ background: 'linear-gradient(45deg, #2A2D3E, #424657)' }}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-sm opacity-80">Balance</p>
                <p className="text-2xl font-bold">${card.balance.toLocaleString()}</p>
              </div>
              <CreditCard size={24} />
            </div>
            <div className="mb-4">
              <p className="text-lg tracking-wider">{card.cardNumber}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs opacity-80">CARD HOLDER</p>
                <p>{card.cardHolder}</p>
              </div>
              <div>
                <p className="text-xs opacity-80">EXPIRES</p>
                <p>{card.expiryDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}