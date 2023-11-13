'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import VegSelectButton from '@/components/VegSelectButton/VegSelectButton';
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

  return (
    <>
      <h2>Please select your first crops:</h2>
      <form className='flex flex-wrap justify-center gap-2 mt-8 px-2'>
        {vegOptions.map((vegName) => (
          <VegSelectButton
            vegName={vegName}
            key={vegName}
            selectedStateHandler={changeHandler}
          />
        ))}
      </form>
      <button type='submit' className='button'>
        Submit
      </button>
    </>
  );
};

export default SelectCrops;
