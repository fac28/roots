async function getData() {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=cat&client_id=${accessKey}&per_page=1`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);

  return <main></main>;
}
