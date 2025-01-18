import { useDataStore } from '../store';
import Card from './Card'

function Cast() {
    const detailsData = useDataStore((state) => state.detailsData);

    if (!detailsData) {
        return <p>Loading...</p>;
    }

    const castData = detailsData.credits.cast

    return (
        <div className='w-4/5 overflow-x-auto bg-slate-50'>

        <div className='flex space-x-4 py-4'>
            {castData.map((credit, index) => (
                <Card
                className='flex-shrink-0 w-64 bg-slate-50 shadow-lg border border-slate-200  min-h-[400px]'
                key={`${credit.id}-${index}`}
                item={credit}
                imageUrl={
                    credit.profile_path
                    ? `https://image.tmdb.org/t/p/w500${credit.profile_path}`
                    : 'https://picsum.photos/id/237/500/750'
                }
                imageAlt={credit.name}
                renderContent={(credit) => (
                  <div className='p-1.5'>
                    <h3 className="card-title font-bold text-slate-700 text-xl">{credit.name}</h3>
                    <p className="card-overview text-slate-700">{credit.character}</p>
                  </div>
                )}
              />

            ))}
        </div>
        </div>
    )
}

export default Cast;
