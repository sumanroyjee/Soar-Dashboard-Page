import { CreditCard as CardIcon } from 'lucide-react';
import type { Card } from '../../types';

interface CreditCardProps {
  card: Card;
}

export function CreditCard({ card }: CreditCardProps) {
  return (
    <div
      className="min-w-[280px] p-6 rounded-xl text-white cursor-pointer transform transition-transform hover:scale-105"
      style={{ background: 'linear-gradient(45deg, #2A2D3E, #424657)' }}
    >
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-sm opacity-80">Balance</p>
          <p className="text-2xl font-bold">${card.balance.toLocaleString()}</p>
        </div>
        <CardIcon size={24} />
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
  );
}