'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

const terms = [
  'Apple',
  'Tomato',
  'Potato',
  'Spinach',
  'Carrot',
  'Lettuce',
  'Strawberry',
  'Pea',
  'Beetroot',
  'Chard',
  'Broad Bean',
  'Chard',
  'Kale',
  'Courgette',
  'Radish',
  'Cucumber',
  'Onion',
  'Sweet Corn',
  'Bell Pepper',
  'Aubergine',
  'Chilli Pepper',
  'Pumpkin',
  'Garlic',
  'Parsley',
  'Coriander',
  'Brussels Sprout',
  'Leek',
  'Cauliflower',
  'Celery',
  'Swede',
  'Borage',
  'Parsnip',
  'Squash',
  'Mint',
  'Turnip',
  'Sunflower',
  'Basil',
  'Hyssop',
  'Chive',
  'Marigold',
  'Thyme',
  'Dill',
  'Rosemary',
  'Nasturtium',
  'Sage',
];

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > 0) {
      setSearchTerm(value);

      const matchingTerms = terms.filter((term) =>
        term.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matchingTerms);
    } else {
      setSuggestions([]);
      setSearchTerm('');
    }
  };

  const handleSuggestionClick = (term: string) => {
    setSearchTerm(term);
    setSuggestions([]);
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedSearchTerm = capitalizeFirstLetter(searchTerm);
    if (terms.includes(formattedSearchTerm)) {
      router.push(`/search/${formattedSearchTerm}`);
    } else {
      router.push('/search');
    }
  };

  return (
    <div className='flex justify-center searchmargintop'>
      <form
        onSubmit={handleSubmit}
        className='flex opacity-70 transition-opacity duration-200 focus-within:opacity-90'
      >
        <div>
          <input
            value={searchTerm}
            className='bg-primaryLight p-2 rounded-l-md shadow-sm mh-10 outline-none'
            type='text'
            placeholder='Find a crop...'
            required
            onChange={handleInputChange}
          />
          <div className=' bg-white text-primaryLight bg-opacity-10 rounded '>
            {suggestions.length > 0 && (
              <ul>
                {suggestions.map((term, index) => (
                  <li
                    className='cursor-pointer pl-2 hover:bg-black'
                    key={index}
                    onClick={() => handleSuggestionClick(term)}
                  >
                    {term}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <button
          className='flex-shrink-0 flex-grow-0 max-h-10 bg-primaryLight py-2 px-3 rounded-r-md '
          type='submit'
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};
