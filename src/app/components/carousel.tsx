import { useState, useRef } from 'react';
import { useDataStore } from '../store';
import Card from './Card';
import Button from './Button';

type CarouselProps = {
    type: 'trendingData';
  };

  function Carousel({ type }: CarouselProps) {
    const items = useDataStore((state) => state[type]);
    const [currentIndex, setCurrentIndex] = useState(items ? items.length : 0);
    const isTransitioning = useRef(false);

    if (!items || items.length === 0) {
      return <div>No items available</div>;
    }

    const itemsPerPage = 5;
    const totalItems = items.length;
    const extendedItems = [
      ...items.slice(-itemsPerPage),
      ...items,
      ...items.slice(0, itemsPerPage),
    ];

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

      setCurrentIndex((prevIndex) =>
        direction === 'next' ? prevIndex + 1 : prevIndex - 1
      );
    };

    return (
      <div className="carousel" style={{ position: 'relative', overflow: 'hidden' }}>
        <Button name="testing" style="btn-primary" />
        <button
          onClick={() => carouselScroll('prev')}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
          }}
        >
          Prev
        </button>
        <div
          className="carousel-track"
          style={{
            display: 'flex',
            transition: isTransitioning.current ? 'transform 0.3s ease-in-out' : 'none',
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedItems.map((item, index) => (
            <Card
              key={`${item.id}-${index}`}
              item={item}
              style={{
                flex: `0 0 ${100 / itemsPerPage}%`,
                boxSizing: 'border-box',
                padding: '8px',
              }}
            />
          ))}
        </div>
        <button
          onClick={() => carouselScroll('next')}
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
          }}
        >
          Next
        </button>
      </div>
    );
  }

  export default Carousel;
