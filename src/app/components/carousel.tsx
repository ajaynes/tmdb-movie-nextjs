import { useState, useRef } from 'react';
import { useDataStore, DataStore } from '../store';
import { BaseItem } from '../types';
import Button from './Button';
import Card from './Card';

type CarouselProps<T> = {
  type?: keyof DataStore;
  items?: T[];
  renderItem?: (item: T, index: number) => React.ReactNode;
  itemsPerPage?: number;
  title?: string;
};

function isBaseItemArray<T extends BaseItem>(items: unknown): items is T[] {
  return Array.isArray(items) && items.every((item) => typeof item.id === 'string' || typeof item.id === 'number');
}

function Carousel<T extends BaseItem>({ type, items, renderItem, itemsPerPage = 5, title }: CarouselProps<T>) {
  const storeItems = useDataStore((state) => (type ? state[type] : null));

  const resolvedItems: T[] =
    isBaseItemArray<T>(storeItems) ? storeItems :
    items || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const isTransitioning = useRef(false);

  if (resolvedItems.length === 0) {
    return <div>No items available</div>;
  }

  const totalItems = resolvedItems.length;

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

  const visibleItems = resolvedItems
    .slice(currentIndex, currentIndex + itemsPerPage)
    .concat(
      currentIndex + itemsPerPage > totalItems
        ? resolvedItems.slice(0, (currentIndex + itemsPerPage) % totalItems)
        : []
    );

  return (
    <div className="carousel relative w-full mx-auto">
      {title && <h2 className="text-xl font-bold text-slate-700 p-2 mt-4">{title}</h2>}
      <Button
        name=""
        classStyles="carousel-btn btn-round border-2 bg-slate-700 opacity-30 hover:opacity-80 prev -left-0"
        onClick={() => handleScroll('prev')}
      />
      <div className="flex transition-transform duration-300 ease-in-out">
        {visibleItems.map((item, index) =>
          renderItem ? (
            renderItem(item, index)
          ) : (
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
                <div className="p-1.5">
                  <h3 className="card-title font-bold text-slate-700 text-xl">
                    {movie.title || movie.name}
                  </h3>
                  <p className="card-overview text-slate-700">
                    {movie.release_date ? movie.release_date : 'No Release Date'}
                  </p>
                </div>
              )}
            />
          )
        )}
      </div>
      <Button
        name=""
        classStyles="carousel-btn btn-round border-2 bg-slate-700 opacity-30 hover:opacity-80 next -right-0"
        onClick={() => handleScroll('next')}
      />
    </div>
  );
}

export default Carousel;
