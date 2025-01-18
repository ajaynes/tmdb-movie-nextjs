import { useState, useRef } from 'react';
import { useDataStore, DataStore } from '../store';
import { formatDate } from '../utils/formatting';
import Card from './Card';
import Button from './Button';

type CarouselProps = {
  type: keyof DataStore;
};

function Carousel({ type }: CarouselProps) {
  const items = useDataStore((state) => {
    const data = state[type];
    return Array.isArray(data) ? data : null;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const isTransitioning = useRef(false);

  if (!items || items.length === 0) {
    return <div>No items available</div>;
  }

  const itemsPerPage = 5;
  const totalItems = items.length;

  const handleScroll = (direction: 'next' | 'prev') => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    setCurrentIndex((prevIndex) =>
      direction === 'next'
        ? (prevIndex + itemsPerPage) % totalItems
        : (prevIndex - itemsPerPage + totalItems) % totalItems
    );

    setTimeout(() => {
      isTransitioning.current = false;
    }, 300);
  };

  const visibleItems = items.slice(
    currentIndex,
    currentIndex + itemsPerPage
  ).concat(
    currentIndex + itemsPerPage > totalItems
      ? items.slice(0, currentIndex + itemsPerPage - totalItems)
      : []
  );

  return (
    <div className="carousel relative w-full max-w-5xl mx-auto">
      <Button
        name=""
        classStyles="btn-round btn-accent carousel-btn prev -left-14"
        onClick={() => handleScroll('prev')}
      />

      <div className="flex transition-transform duration-300 ease-in-out">
        {visibleItems.map((item, index) => (
          <Card
            key={`${item.id}-${index}`}
            item={item}
            link={`/${item.id}`}
            className="flex-shrink-0 bg-slate-50 shadow-lg border border-slate-200 min-h-[400px]"
            imageUrl={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : 'https://placehold.co/500x400'
            }
            imageAlt={item.title || item.name || 'No Title'}
            voteAverage={item.vote_average}
            renderContent={(movie) => (
              <div className='p-1.5'>
                <h3 className="card-title font-bold text-slate-700 text-xl">{movie.title || movie.name}</h3>
                <p className="card-overview text-slate-700">
                  {movie.release_date ? formatDate(movie.release_date) : 'No Release Date'}
                </p>
              </div>
            )}
          />
        ))}
      </div>

      <Button
        name=""
        classStyles="btn-round btn-accent carousel-btn next -right-14"
        onClick={() => handleScroll('next')}
      />
    </div>
  );
}

export default Carousel;
