import Image from 'next/image';
import Rating from './Rating';
import { useDataStore } from '../store';

function Hero() {
  const detailsData = useDataStore((state) => state.detailsData);

  if (!detailsData) {
    return <p>Loading...</p>;
  }
  return (
    <div className='bg-slate-900 py-10 text-slate-100'>
      <div className='container mx-auto flex lg:px-16 md:px-10 sm:px-5'>
        <div className='flex lg:gap-x-16 gap-x-10 flex-col sm:flex-row'>
          <Image
            src={detailsData.poster_path ? `https://image.tmdb.org/t/p/w500${detailsData.poster_path}` : 'https://placehold.co/500x400'}
            alt={detailsData.title || 'No Title'}
            width={300}
            height={300}
            className='card-image max-w-80'
          />

          <div className='w-full'>
            <div className='flex gap-x-4 items-center'>
              <h1 className='text-3xl font-bold'>{detailsData.title}</h1>
              <p className='text-3xl'>({detailsData.release_date.split('-')[0]})</p>
            </div>
            <p>{detailsData.genres.map((genre, index) => `${genre.name}${index + 1 !== detailsData.genres.length ? ', ' : ''} `)}</p>
            <div className='w-[110] h-[50] flex gap-x-4 my-6'>
              <Rating voteAverage={detailsData.vote_average ?? 0} maxValue={10} />
              <p className='font-bold leading-6'>User Rating</p>
            </div>
            <h2 className='text-slate-300 italic mb-4'>{detailsData.tagline}</h2>
            <h3 className='text-xl font-bold mb-2'>Overview</h3>
            <p>{detailsData.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
