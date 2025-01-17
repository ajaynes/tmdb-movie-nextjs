import { useDataStore } from '../store';
function Reviews() {
    const reviewsData = useDataStore((state) => state.reviewsData);

    if (!reviewsData) {
        return <p>Loading...</p>;
    }

    console.log(reviewsData.results)

    return (
       <div>
         {reviewsData.results.map((review) => (
            <div key={review.id}>
                <p>{review.author_details.username}</p>
                <p>{review.author_details.rating}</p>
                <p>{review.content}</p>
                <p>{review.created_at}</p>
            </div>
         ))}
       </div>
    )
}

export default Reviews;
