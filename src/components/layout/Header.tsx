import { SearchBar } from './SearchBar';
import { ProfileMenu } from './ProfileMenu';

export function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <h1 className="text-xl font-semibold">Overview</h1>
        <SearchBar />
      </div>
      <ProfileMenu />
    </header>
  );
}