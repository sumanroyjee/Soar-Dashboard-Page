import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface MenuItemProps {
  item: {
    icon: LucideIcon;
    label: string;
    path: string;
  };
  isActive: boolean;
}

export function MenuItem({ item, isActive }: MenuItemProps) {
  const Icon = item.icon;
  
  return (
    <Link
      to={item.path}
      className={clsx(
        'flex items-center gap-3 p-3 rounded-lg transition-colors',
        isActive
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-600 hover:bg-gray-50'
      )}
    >
      <Icon size={20} />
      <span>{item.label}</span>
    </Link>
  );
}