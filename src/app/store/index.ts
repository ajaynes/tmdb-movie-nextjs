import { create } from 'zustand';
import { ListItem, DetailItem, ReviewResponse } from '../types';

export type DataStore = {
  trendingData: ListItem[] | null;
  popularData: ListItem[] | null;
  topRatedData: ListItem[] | null;
  upComingData: ListItem[] | null;
  detailsData: DetailItem | null;
  reviewsData: ReviewResponse | null;
  setTrendingData: (data: ListItem[]) => void;
  setPopularData: (data: ListItem[]) => void;
  setTopRatedData: (data: ListItem[]) => void;
  setUpComingData: (data: ListItem[]) => void;
  setDetailsData: (data: DetailItem) => void;
  setReviewsData: (data: ReviewResponse) => void;
};

export const useDataStore = create<DataStore>((set) => ({
  trendingData: null,
  popularData: null,
  topRatedData: null,
  upComingData: null,
  detailsData: null,
  reviewsData: null,
  setTrendingData: (data) => set({ trendingData: data }),
  setPopularData: (data) => set({ popularData: data }),
  setTopRatedData: (data) => set({ topRatedData: data }),
  setUpComingData: (data) => set({ upComingData: data }),
  setDetailsData: (data) => set({ detailsData: data }),
  setReviewsData: (data) => set({ reviewsData: data }),
}));
