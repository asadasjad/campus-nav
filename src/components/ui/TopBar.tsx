"use client";

export default function TopBar() {
  return (
    <div className="absolute top-4 left-0 w-full px-4 z-10">
      <div className="bg-white rounded-full shadow-lg flex items-center px-4 py-2">
        <span className="text-gray-500 mr-2">🔍</span>
        <input
          placeholder="Search for places"
          className="w-full outline-none"
        />
      </div>
    </div>
  );
}