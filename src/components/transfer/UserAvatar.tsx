import type { User } from '../../types';

interface UserAvatarProps {
  user: User;
}

export function UserAvatar({ user }: UserAvatarProps) {
  return (
    <div className="flex flex-col items-center min-w-[80px] p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-12 h-12 rounded-full mb-2"
      />
      <p className="text-sm font-medium text-center">{user.name}</p>
      <p className="text-xs text-gray-500">{user.role}</p>
    </div>
  );
}