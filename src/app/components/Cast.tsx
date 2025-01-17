import { useDataStore } from '../store';
import Card from './Card'

function Cast() {
    const detailsData = useDataStore((state) => state.detailsData);

    if (!detailsData) {
        return <p>Loading...</p>;
    }



    console.log(detailsData)


    return (
        <div>
            {detailsData.credits.cast.map((credit, index) => (
                <Card
                key={`${credit.id}-${index}`}
                item={credit}
                itemsPerPage={5}
                link="#"
                imageUrl={
                    credit.profile_path
                    ? `https://image.tmdb.org/t/p/w500${credit.profile_path}`
                    : 'https://placehold.co/500x400'
                }
                imageAlt={credit.name}
                renderContent={(credit) => (
                  <>
                    <h3 className="card-title">{credit.name}</h3>
                    <p className="card-overview">{credit.character}</p>
                  </>
                )}
              />

            ))}
        </div>
    )
}

export default Cast;
