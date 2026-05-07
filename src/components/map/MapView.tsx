"use client";

export default function MapView() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-blue-200">
      {/* Fake map grid */}
      <div className="w-full h-full opacity-20 bg-[url('/grid.svg')]"></div>
    </div>
  );
}