import Link from 'next/link';
import Image from 'next/image';
import Rating from './Rating';

type CardProps<T> = {
  item: T;
  renderContent: (item: T) => React.ReactNode;
  link?: string;
  imageUrl?: string;
  imageAlt?: string;
  voteAverage?: number;
  className?: string;
};

function Card<T>({ item, renderContent, link, imageUrl, imageAlt, voteAverage, className }: CardProps<T>) {
  const cardContent = (
    <div className={`${className} relative`}>
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
        <div className="absolute bottom-32 right-2">
          <Rating voteAverage={voteAverage} maxValue={10} />
        </div>
      )}
      <div className="card-content">{renderContent(item)}</div>
    </div>
  );

  return (
    <div
      className="card box-border p-2"
    >
      {link ? (
        <Link href={link} passHref>
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </div>
  );
}

export default Card;
