'use client'
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { fetchHelper } from '../utils/fetchData';
import { useDataStore } from '../store';
import { DetailItem } from '../types';
import Cast from '../components/Cast';

function DetailsPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const name = params.name;
  const id = searchParams.get('id');

  // const detailsEndpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=release_dates,videos,credits,similar,recommendations,images&include_image_language=en,null`;
  const detailsEndpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=credits`;
  const { setDetailsData } = useDataStore();

  useEffect(() => {
    const fetchDetails = async () => {
      const data: DetailItem | null = await fetchHelper(detailsEndpoint);
      if (data) {
        setDetailsData(data);
      }
    };

    fetchDetails();
  }, [setDetailsData]);


  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Name: {name}</p>
      <p>ID: {id}</p>
      <Cast />
    </div>
  )
};

export default DetailsPage;
