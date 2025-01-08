import { create } from 'zustand';
import { ListItem } from '../types';

type DataStore = {
  trendingData: ListItem[] | null;
  popularData: ListItem[] | null;
  topRatedData: ListItem[] | null;
  setTrendingData: (data: ListItem[]) => void;
  setPopularData: (data: ListItem[]) => void;
  setTopRatedData: (data: ListItem[]) => void;
};

export const useDataStore = create<DataStore>((set) => ({
  trendingData: null,
  popularData: null,
  topRatedData: null,
  setTrendingData: (data) => set({ trendingData: data }),
  setPopularData: (data) => set({ popularData: data }),
  setTopRatedData: (data) => set({ topRatedData: data }),
}));
