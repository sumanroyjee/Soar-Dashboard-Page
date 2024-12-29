import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for anything..."
        className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
    </div>
  );
}