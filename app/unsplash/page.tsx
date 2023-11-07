'use client';

import { useEffect, useState } from 'react';

interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

interface UnsplashApiResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

const Page = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const query = 'tomato';

  useEffect(() => {
    async function fetchData() {
      try {
        const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY; // Ensure you've set your access key in environment variables
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}&per_page=1`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: UnsplashApiResponse = await response.json();
        setImages(data.results);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    }

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      {images.map((image) => (
        <div key={image.id}>
          {/* <h2>{image.alt_description}</h2> */}
          <img src={image.urls.small} alt={image.alt_description} />
        </div>
      ))}
    </main>
  );
};

export default Page;
