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

  // Declare the endpoints within useEffect
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
  }, [detailsEndpoint, reviewsEndpoint, id, setDetailsData, setReviewsData]);  // Add the endpoints as dependencies

  return (
    <div>
      <Hero />
      <h1>Dynamic Page</h1>
      <p>ID: {id}</p>
      <Cast />
      <Reviews />
    </div>
  );
};

export default DetailsPage;
