import { Send } from 'lucide-react';
import type { User } from '../types';

interface QuickTransferProps {
  users: User[];
}

export function QuickTransfer({ users }: QuickTransferProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Quick Transfer</h2>
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center min-w-[80px] p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full mb-2"
            />
            <p className="text-sm font-medium text-center">{user.name}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter amount"
          className="flex-1 p-2 border rounded-lg"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Send size={16} />
          Send
        </button>
      </div>
    </div>
  );
}