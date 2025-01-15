import { useDataStore } from '../store';

function Cast() {
    const detailsData = useDataStore((state) => state.detailsData);

    if (!detailsData) {
        return <p>Loading...</p>;
    }



    console.log(detailsData.credits.cast)


    return (
        <div>
            {detailsData.credits.cast.map((credit) => {
                return <div key={credit.id}>{credit.name}</div>
            })}
        </div>
    )
}

export default Cast;
