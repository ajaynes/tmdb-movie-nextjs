'use client';

import { useEffect } from 'react';
import { fetchHelper } from './utils/fetchData';
import { useDataStore } from './store';
import { TrendingItem } from './types';

const mediaType = 'movie';
const timeWindow = 'day';
const trendingEndpoint = `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

export default function Home() {
  const { trendingData, setTrendingData } = useDataStore();

  useEffect(() => {
    const fetchTrending = async () => {
      const data = await fetchHelper(trendingEndpoint);
      if (data) {
        setTrendingData(data.results as TrendingItem[]); // Explicitly cast to the correct type
      }
    };

    fetchTrending();
  }, [setTrendingData]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button
        onClick={async () => {
          const data = await fetchHelper(trendingEndpoint);
          if (data) {
            setTrendingData(data.results as TrendingItem[]);
          }
        }}
      >
        Fetch Data
      </button>

      <div>
        {trendingData
          ? trendingData.map((item) => (
              <div key={item.id}>{item.title || item.name}</div>
            ))
          : 'Loading...'}
      </div>
    </div>
  );
}
