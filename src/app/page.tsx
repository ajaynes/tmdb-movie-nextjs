'use client'
import { fetchHelper }  from './utils/fetchData';

const mediaType = 'movie' // options: movie, tv, person, all
const timeWindow = 'day' // options: day, week

  // endpoints
  const trending = `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {process.env.NEXT_PUBLIC_API_KEY}
      <button onClick={() => fetchHelper(trending)}>Hello</button>
    </div>
  );
}
