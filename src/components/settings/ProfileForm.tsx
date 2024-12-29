import { ProfileImage } from './ProfileImage';
import { ProfileFields } from './ProfileFields';

export function ProfileForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-lg font-medium">Your Profile</h2>
          <ProfileFields />
        </div>
        
        <div className="space-y-6">
          <h2 className="text-lg font-medium">Additional Details</h2>
          <ProfileImage />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                defaultValue="San Jose"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postal Code
              </label>
              <input
                type="text"
                defaultValue="95052"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              defaultValue="USA"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button className="w-full sm:w-auto px-8 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          Save
        </button>
      </div>
    </form>
  );
}