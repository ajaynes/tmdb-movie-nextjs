import Link from 'next/link';
import Image from 'next/image';
import { ListItem } from '../types';
import { formatDate } from '../utils/formatting';
import Rating from './Rating';

type CardProps = {
  item: ListItem;
  itemsPerPage: number;
  voteAverage: number;
};

function Card({ item, itemsPerPage }: CardProps) {
  return (
    <div
      className='card box-border p-2'
      style={{
        flex: `0 0 ${100 / itemsPerPage}%`,
      }}>
      <Link
        href={{
          pathname: `/${item.title.replaceAll(' ', '-').toLowerCase()}`,
          query: { id: item.id },
        }}
>
        <div className='relative'>
          <Image
            src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'https://placehold.co/500x400'}
            alt={item.title || item.name || 'No Title'}
            width={300}
            height={300}
            className='card-image'
          />
          <div className='absolute -bottom-3 right-3'>
            <Rating voteAverage={item.vote_average ?? 0} maxValue={10} />
          </div>
        </div>
        <div className='card-content'>
          <h3 className='card-title'>{item.title || item.name}</h3>
          <p className='card-overview'>{item.release_date ? formatDate(item.release_date) : 'No Release Date'}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
