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

export const fetchUnsplashImage = async (
  searchTerm: string
): Promise<UnsplashImage | null> => {
  try {
    const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${accessKey}&per_page=1`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: UnsplashApiResponse = await response.json();
    return data.results[0] || null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
