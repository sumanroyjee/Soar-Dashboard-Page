import { Home, PieChart, CreditCard, Users, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: PieChart, label: 'Analytics', path: '/analytics' },
  { icon: CreditCard, label: 'Credit Cards', path: '/cards' },
  { icon: Users, label: 'Accounts', path: '/accounts' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white h-screen p-4 fixed left-0 top-0 border-r">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Main Dashboard</h1>
      </div>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors',
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}