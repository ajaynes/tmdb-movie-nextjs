'use client';

import { useEffect } from 'react';
import { fetchHelper } from './utils/fetchData';
import { useDataStore } from './store';
import { ListResponse } from './types';
import Carousel from './components/Carousel';

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
    <div className="container mx-auto flex flex-col lg:px-16 md:px-10 sm:px-5">
      <h2 className="text-xl font-bold text-slate-700 p-2 mt-4">What <span className="capitalize">{mediaType}</span>s are Trending this <span className="capitalize">{timeWindow}</span></h2>
      <Carousel type='trendingData' />
    </div>
  );
}
