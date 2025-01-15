import { create } from 'zustand';
import { ListItem } from '../types';

export type DataStore = {
  trendingData: ListItem[] | null;
  popularData: ListItem[] | null;
  topRatedData: ListItem[] | null;
  upComingData: ListItem[] | null;
  setTrendingData: (data: ListItem[]) => void;
  setPopularData: (data: ListItem[]) => void;
  setTopRatedData: (data: ListItem[]) => void;
  setUpComingData: (data: ListItem[]) => void;
};

export const useDataStore = create<DataStore>((set) => ({
  trendingData: null,
  popularData: null,
  topRatedData: null,
  upComingData: null,
  setTrendingData: (data) => set({ trendingData: data }),
  setPopularData: (data) => set({ popularData: data }),
  setTopRatedData: (data) => set({ topRatedData: data }),
  setUpComingData: (data) => set({ upComingData: data }),
}));
