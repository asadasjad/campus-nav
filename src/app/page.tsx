"use client";

import { useAppState } from "@/store/useAppState";
import MapView from "@/components/map/MapView";
import BottomCard from "@/components/ui/BottomCard";
import TopBar from "@/components/ui/TopBar";
import FloatingControls from "@/components/ui/FloatingControls";

export default function App() {
  const { mode } = useAppState();

  return (
    <main className="h-screen w-screen relative overflow-hidden">
      <MapView />

      <TopBar />
      <FloatingControls />

      <BottomCard mode={mode} />
    </main>
  );
}