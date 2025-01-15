'use client';

import { useEffect } from 'react';
import { fetchHelper } from './utils/fetchData';
import { useDataStore } from './store';
import { ListResponse } from './types';
import Carousel from './components/Carousel'

const mediaType = 'movie';
const timeWindow = 'week';
const trendingEndpoint = `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

export default function Home() {
  const { setTrendingData } = useDataStore();

  useEffect(() => {
    const fetchTrending = async () => {
      const data: ListResponse | null = await fetchHelper(trendingEndpoint);
      if (data) {
        setTrendingData(data.results);
      }
    };

    fetchTrending();
  }, [setTrendingData]);

  return (
    <div>
      <Carousel type="trendingData" />
    </div>
  );
}
