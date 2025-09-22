// src/store/globalStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type GlobalState = {
  accessToken: string | null;
  hasHydrated: boolean | null;
};

type GlobalActions = {
  setToken: (token: string) => void;
  clearAuth: () => void;
  setHydrated: (value: boolean) => void;
};

type GlobalStore = GlobalState & GlobalActions;

export const useGlobalStore = create<GlobalStore>()(
  persist(
    (set) => ({
      accessToken: null,
      hasHydrated: false,

      setToken: (token: string) => {
        set(() => ({
          accessToken: token,
        }));
      },

      clearAuth: () => {
        set(() => ({
          accessToken: null,
        }));
      },
      setHydrated: (value: boolean) => set({ hasHydrated: value }),
    }),
    {
      name: 'global-store', 
      partialize: (state) => ({
        accessToken: state.accessToken,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated(true);
        }
      },
    }
  )
);
