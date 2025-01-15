import { useState, useRef } from 'react';
import { useDataStore, DataStore } from '../store';
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

  const [currentIndex, setCurrentIndex] = useState(items ? items.length : 0);
  const isTransitioning = useRef(false);

  if (!items || items.length === 0) {
    return <div>No items available</div>;
  }

  const itemsPerPage = 5;
  const totalItems = items.length;
  const extendedItems = [...items.slice(-itemsPerPage), ...items, ...items.slice(0, itemsPerPage)];

  const handleTransitionEnd = () => {
    isTransitioning.current = false;

    if (currentIndex < itemsPerPage) {
      setCurrentIndex(totalItems);
    } else if (currentIndex >= totalItems + itemsPerPage) {
      setCurrentIndex(itemsPerPage);
    }
  };

  const carouselScroll = (direction: 'next' | 'prev') => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrentIndex((prevIndex) => (direction === 'next' ? prevIndex + 1 : prevIndex - 1));
  };

  return (
    <div className="carousel relative overflow-hidden">
      <Button
        name="<"
        classStyles="btn-round btn-accent carousel-btn prev left-0"
        onClick={() => carouselScroll('prev')}
      />
      <div
        className="carousel-track flex"
        style={{
          transition: isTransitioning.current ? 'transform 0.3s ease-in-out' : 'none',
          transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedItems.map((item, index) => (
          <Card
            key={`${item.id}-${index}`}
            item={item}
            itemsPerPage={itemsPerPage}
            voteAverage={item.vote_average ?? 0}
          />
        ))}
      </div>
      <Button
        name=">"
        classStyles="btn-round btn-accent carousel-btn next right-0"
        onClick={() => carouselScroll('next')}
      />
    </div>
  );
}

export default Carousel;
