export function SettingsTabs() {
  return (
    <div className="border-b mb-6">
      <div className="flex gap-6">
        <button className="text-blue-600 border-b-2 border-blue-600 pb-4 px-2 font-medium">
          Edit Profile
        </button>
        <button className="text-gray-500 pb-4 px-2">
          Preferences
        </button>
        <button className="text-gray-500 pb-4 px-2">
          Security
        </button>
      </div>
    </div>
  );
}