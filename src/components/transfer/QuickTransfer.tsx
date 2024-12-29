import { Send } from 'lucide-react';
import { UserAvatar } from './UserAvatar';
import type { User } from '../../types';

interface QuickTransferProps {
  users: User[];
}

export function QuickTransfer({ users }: QuickTransferProps) {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Quick Transfer</h2>
      <div className="flex gap-3 mb-4 overflow-x-auto pb-2">
        {users.map((user) => (
          <UserAvatar key={user.id} user={user} />
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter amount"
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Send size={16} />
          Send
        </button>
      </div>
    </div>
  );
}