import { create } from 'zustand';
import { TrendingItem, OtherDataItem } from '../types'; // Adjust the path as needed

type DataStore = {
  trendingData: TrendingItem[] | null;
  setTrendingData: (data: TrendingItem[]) => void;
  otherData: OtherDataItem[] | null;
  setOtherData: (data: OtherDataItem[]) => void;
};

export const useDataStore = create<DataStore>((set) => ({
  trendingData: null,
  setTrendingData: (data) => set({ trendingData: data }),
  otherData: null,
  setOtherData: (data) => set({ otherData: data }),
}));
