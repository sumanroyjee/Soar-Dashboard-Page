import { Header } from '../components/layout/Header';
import { CardSection } from '../components/cards/CardSection';
import { WeeklyActivity } from '../components/charts/WeeklyActivity';
import { ExpenseStatistics } from '../components/charts/ExpenseStatistics';
import { BalanceHistory } from '../components/charts/BalanceHistory';
import { TransactionList } from '../components/transactions/TransactionList';
import { QuickTransfer } from '../components/transfer/QuickTransfer';
import { mockData } from '../data/mockData';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 md:p-6 md:ml-64">
        <Header />
        <div className="mt-6 space-y-6">
          <CardSection cards={mockData.cards} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-6">
              <WeeklyActivity />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ExpenseStatistics />
                <BalanceHistory />
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-6">
              <TransactionList transactions={mockData.transactions} />
              <QuickTransfer users={mockData.users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}