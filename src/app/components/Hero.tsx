import Image from 'next/image'
import Rating from './Rating';
import { useDataStore } from '../store';

function Hero() {
    const detailsData = useDataStore((state) => state.detailsData);

    if (!detailsData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
           <p>{detailsData.title}</p>
           <p>{detailsData.release_date.split('-')[0]}</p>
           <p>{detailsData.overview}</p>
           <Image
                src={detailsData.poster_path ? `https://image.tmdb.org/t/p/w500${detailsData.poster_path}` : 'https://placehold.co/500x400'}
                alt={detailsData.title || 'No Title'}
                width={300}
                height={300}
                className='card-image'
            />
            <Rating voteAverage={detailsData.vote_average ?? 0} maxValue={10} />
        </div>
    )
}

export default Hero;
