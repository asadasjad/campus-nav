"use client";

export default function FloatingControls() {
  return (
    <div className="absolute right-4 bottom-32 flex flex-col gap-3 z-10">
      <button className="bg-white p-3 rounded-full shadow-md">
        📍
      </button>

      <button className="bg-white p-3 rounded-full shadow-md">
        🧭
      </button>
    </div>
  );
}