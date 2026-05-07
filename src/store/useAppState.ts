"use client";

import { create } from "zustand";

type AppStateType = {
  mode: "explore" | "navigating" | "indoor";
  setMode: (mode: AppStateType["mode"]) => void;
};

export const useAppState = create<AppStateType>((set) => ({
  mode: "explore",
  setMode: (mode) => set({ mode }),
}));