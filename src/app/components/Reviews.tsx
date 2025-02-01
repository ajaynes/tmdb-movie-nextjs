import { useDataStore } from '../store';
import Accordion from './Accordion';
import { formatDate } from '../utils/formatting';
function Reviews() {
  const reviewsData = useDataStore((state) => state.reviewsData);

  if (!reviewsData) {
    return <p>Loading...</p>;
  }

  const accordionArray: { title: string; content: string }[] = [];

  reviewsData.results.forEach((result) => {
    accordionArray.push({
      title: `<b>${result.author}</b> reviewed this on ${formatDate(result.created_at)}`,
      content: `${result.author_details.rating ? '<div class="rating-tag">' + result.author_details.rating * 10 + '%</div>' : ''} ${result.content}`,
    });
  });

  return (
    <div className="p-2">
      <hr className="h-px my-8 bg-gray-400 border-0" />
      <h2 className="text-xl font-bold mb-4 text-slate-700">Reviews</h2>
      {accordionArray.length === 0 && <p>No reviews found.</p>}
      <Accordion items={accordionArray} />
    </div>
  );
}

export default Reviews;
