"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PreloaderStore {
  hasSeenPreloader: boolean;
  isComplete: boolean;
  setComplete: () => void;
  skipPreloader: () => void;
}

export const usePreloaderStore = create<PreloaderStore>()(
  persist(
    (set) => ({
      hasSeenPreloader: false,
      isComplete: false,
      setComplete: () => set({ isComplete: true, hasSeenPreloader: true }),
      skipPreloader: () => set({ isComplete: true, hasSeenPreloader: true }),
    }),
    { name: "cv-preloader", partialize: (s) => ({ hasSeenPreloader: s.hasSeenPreloader }) }
  )
);
