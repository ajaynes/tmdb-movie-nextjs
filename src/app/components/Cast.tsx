import { useDataStore } from '../store';
import Card from './Card';
import Carousel from './Carousel';

function Cast() {
  const detailsData = useDataStore((state) => state.detailsData);

  if (!detailsData) {
    return <p>Loading...</p>;
  }

  const castData = detailsData.credits.cast;

  return (
      <Carousel
        title='Cast'
        items={castData}
        itemsPerPage={5}
        renderItem={(credit, index) => (
          <Card
            key={`${credit.id}-${index}`}
            item={credit}
            imageUrl={credit.profile_path ? `https://image.tmdb.org/t/p/w500${credit.profile_path}` : 'https://picsum.photos/id/237/500/750'}
            imageAlt={credit.name}
            className="shadow-md  min-h-[400px]"
            renderContent={(credit) => (
              <div className="p-1.5">
                <h3 className="card-title font-bold text-slate-700 text-xl">{credit.name} {credit.profile_path ? null : <span>Not Pictured</span>}</h3>
                <p className="card-overview text-slate-700">{credit.character}</p>
              </div>
            )}
          />
        )}
      />
  );
}

export default Cast;
