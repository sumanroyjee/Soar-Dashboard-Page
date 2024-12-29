import { Menu, Home, Layers, Wallet, PieChart, CreditCard, Users, Zap, Settings } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';
import { MenuItem } from './MenuItem';
import { useLocation } from 'react-router-dom';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Layers, label: 'Transactions', path: '/transactions' },
  { icon: Wallet, label: 'Accounts', path: '/accounts' },
  { icon: PieChart, label: 'Investments', path: '/investments' },
  { icon: CreditCard, label: 'Credit Cards', path: '/cards' },
  { icon: Users, label: 'Loans', path: '/loans' },
  { icon: Zap, label: 'Services', path: '/services' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="block md:hidden">
      <div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-4 border-b bg-white">
        <Logo />
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-30 pt-20">
          <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-5rem)]">
            {menuItems.map((item) => (
              <MenuItem
                key={item.path}
                item={item}
                isActive={location.pathname === item.path}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}