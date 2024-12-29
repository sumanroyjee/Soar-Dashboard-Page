import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { Transaction } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-full ${
                transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {transaction.type === 'credit' ? (
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
              transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.type === 'credit' ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}