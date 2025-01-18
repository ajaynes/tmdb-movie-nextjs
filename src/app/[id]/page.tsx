'use client';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { fetchHelper } from '../utils/fetchData';
import { useDataStore } from '../store';
import { DetailItem, ReviewResponse } from '../types';
import Cast from '../components/Cast';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';

function DetailsPage() {
  const params = useParams();
  const id = params.id;

  const { setDetailsData, setReviewsData } = useDataStore();

  const detailsEndpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=credits&include_image_language=en,null`;
  const reviewsEndpoint = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  useEffect(() => {
    const fetchDetails = async () => {
      const data: DetailItem | null = await fetchHelper(detailsEndpoint);
      if (data) {
        setDetailsData(data);
      }
    };
    const fetchReviews = async () => {
      const data: ReviewResponse | null = await fetchHelper(reviewsEndpoint);
      if (data) {
        setReviewsData(data);
      }
    };

    fetchDetails();
    fetchReviews();
  }, [detailsEndpoint, reviewsEndpoint, id, setDetailsData, setReviewsData]);

  return (
    <div>
      <Hero />
      <div className='bg-slate-50 container mx-auto'>
        <div className='flex flex-row lg:px-16 md:px-10 sm:px-5 gap-8'>
          <Cast />
          <div className='mx-auto w-1/5 text-slate-700'>
            <div className='w-full pt-6'>Sidebar content here</div>
          </div>
        </div>
        <Reviews />
      </div>
    </div>
  );
}

export default DetailsPage;
