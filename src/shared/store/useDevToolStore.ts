import { create } from 'zustand';

type DevToolState = {
  platform: 'ios' | 'android';
  setPlatform: (platform: 'ios' | 'android') => void;
};

export const useDevToolStore = create<DevToolState>((set) => ({
  platform: 'ios',
  setPlatform: (platform) => set({ platform }),
}));
