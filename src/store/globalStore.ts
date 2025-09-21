// src/store/globalStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type GlobalState = {
  accessToken: string | null;
};

type GlobalActions = {
  setToken: (token: string) => void;
  clearAuth: () => void;
};

type GlobalStore = GlobalState & GlobalActions;

export const useGlobalStore = create<GlobalStore>()(
  persist(
    (set) => ({
      accessToken: null,

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
    }),
    {
      name: 'global-store', 
      partialize: (state) => ({
        accessToken: state.accessToken,
      }),
    }
  )
);
