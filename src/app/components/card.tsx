import Link from 'next/link';
import Image from 'next/image';
import Rating from './Rating';

type CardProps<T> = {
  item: T;
  itemsPerPage: number;
  renderContent: (item: T) => React.ReactNode;
  link?: string;
  imageUrl?: string;
  imageAlt?: string;
  voteAverage?: number; // Optional vote average
};

function Card<T>({ item, itemsPerPage, renderContent, link, imageUrl, imageAlt, voteAverage }: CardProps<T>) {
  return (
    <div
      className="card box-border p-2"
      style={{
        flex: `0 0 ${100 / itemsPerPage}%`,
      }}
    >
      <Link href={link || '#'} passHref>
        <div className="relative">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={imageAlt || 'Image'}
              width={300}
              height={300}
              className="card-image"
            />
          )}
          {typeof voteAverage === 'number' && (
            <div className="absolute -bottom-3 right-3">
              <Rating voteAverage={voteAverage} maxValue={10} />
            </div>
          )}
        </div>
        <div className="card-content">{renderContent(item)}</div>
      </Link>
    </div>
  );
}

export default Card;
