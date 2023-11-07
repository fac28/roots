'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearchPlus } from 'react-icons/fa';

const terms = ['Apple', 'Tomato', 'Potato', 'Spinach'];

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
  };

  return (
    <div className='flex justify-center mt-4'>
      <form onSubmit={handleSubmit} className='flex'>
        <div>
          <input
            value={searchTerm}
            className='bg-slate-200 p-2 rounded-l-md shadow-sm mh-10'
            type='text'
            placeholder='Grow something...'
            required
            onChange={handleInputChange}
          />
          <div>
            {suggestions.length > 0 && (
              <ul>
                {suggestions.map((term, index) => (
                  <li key={term} onClick={() => handleSuggestionClick(term)}>
                    {term}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <button
          className='flex-shrink-0 flex-grow-0 max-h-10 bg-slate-400 py-2 px-3 rounded-r-md shadow-md'
          type='submit'
        >
          <FaSearchPlus />
        </button>
      </form>
    </div>
  );
};
