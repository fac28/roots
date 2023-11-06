'use client'

import { filterByVeggie } from '@/utils/supabase/models/filterByVeggie'
import { Veggie } from '@/utils/supabase/types/globalTypes'

import { useState } from 'react'

const terms = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grapes',
  'Honeydew',
]

export const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value.length > 0) {
      setInputValue(value)

      const matchingTerms = terms.filter((term) =>
        term.toLowerCase().includes(value.toLowerCase())
      )
      setSuggestions(matchingTerms)
    } else {
      setSuggestions([])
      setInputValue('')
    }
  }

  const handleSuggestionClick = (term: string) => {
    setInputValue(term)
    setSuggestions([])
  }

  return (
    <div className='flex justify-center mt-4'>
      <form onSubmit={handleSubmit} className='flex'>
        <div>
          <input
            value={inputValue}
            className='bg-slate-200 mr-3'
            type='text'
            placeholder='Grow something...'
            required
            onChange={handleInputChange}
          />
          <div>
            {suggestions.length > 0 && (
              <ul>
                {suggestions.map((term, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(term)}>
                    {term}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <button
          className='flex-shrink-0 bg-blue-400 p-2 rounded-md disabled:bg-slate-400'
          disabled={isSubmitting}
          type='submit'
        >
          Search
        </button>
      </form>
    </div>
  )
}
