'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import VegSelectButton from '@/components/VegSelectButton';
import { useState, useEffect } from 'react';

const SelectCrops = () => {
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [vegOptions, setVegOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchVegOptions = async () => {
      const supabase = createClientComponentClient();
      const { data, error } = await supabase.from('veg').select('name');

      if (error) {
        console.error(error.message);
        return;
      }

      const veggies = data.map((row) => row.name);
      if (veggies) {
        setVegOptions(veggies);
      }
    };

    fetchVegOptions();
  }, []);

  const changeHandler = (selectedCrop: string) => {
    setSelectedCrops((prevState) => {
      if (prevState.includes(selectedCrop)) {
        return prevState.filter((crop) => crop !== selectedCrop);
      } else {
        return [...prevState, selectedCrop];
      }
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedCrops }),
      });
      if (response.ok) {
      } else {
        console.error('Error during signup');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <h2>Please select your first crops:</h2>
      <form
        className='flex flex-wrap justify-center gap-2 mt-8 px-2'
        onSubmit={handleSubmit}
      >
        {vegOptions.map((vegName) => (
          <VegSelectButton
            vegName={vegName}
            key={vegName}
            selectedStateHandler={changeHandler}
          />
        ))}
        <button type='submit' className='button'>
          Submit
        </button>
      </form>
    </>
  );
};

export default SelectCrops;
