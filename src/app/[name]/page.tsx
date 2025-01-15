'use client'
import { useParams } from 'next/navigation';

function DetailsPage() {
  const params = useParams();
  const { name } = params;

  return <div>Dynamic Page for name: {name}</div>;
};

export default DetailsPage;
