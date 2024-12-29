import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { Transaction } from '../../types';

interface TransactionItemProps {
  transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const isCredit = transaction.type === 'credit';
  
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-full ${
          isCredit ? 'bg-green-100' : 'bg-red-100'
        }`}>
          {isCredit ? (
            <ArrowDownRight className="text-green-600" />
          ) : (
            <ArrowUpRight className="text-red-600" />
          )}
        </div>
        <div>
          <p className="font-medium">{transaction.description}</p>
          <p className="text-sm text-gray-500">{transaction.date}</p>
        </div>
      </div>
      <p className={`font-medium ${
        isCredit ? 'text-green-600' : 'text-red-600'
      }`}>
        {isCredit ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString()}
      </p>
    </div>
  );
}