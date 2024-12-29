export function ProfileImage() {
  return (
    <div className="flex flex-col items-center p-6 border border-dashed rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <button className="text-blue-600 hover:text-blue-700">Change Photo</button>
    </div>
  );
}