import { Bell } from 'lucide-react';

export function ProfileMenu() {
  return (
    <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Bell size={20} className="text-gray-600" />
      </button>
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />
    </div>
  );
}