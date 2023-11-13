'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import VegSelectButton from '@/components/VegSelectButton/VegSelectButton';
import { useState, useEffect } from 'react';

const getVeggieNames = async () => {
  const supabase = createClientComponentClient();
  const { data, error } = await supabase.from('veg').select('name');

  if (error) {
    console.error(error.message);
    return;
  }

  return data.map((row) => row.name);
};

const SelectCrops = () => {
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [vegOptions, setVegOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchVegOptions = async () => {
      const veggies = await getVeggieNames();
      if (veggies) {
        setVegOptions(veggies);
      }
    };

    fetchVegOptions();
  }, [vegOptions]);

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
      <div>
        <p>CROPSS</p>
        {selectedCrops.map((crop, index) => (
          <p key={index}>{crop}</p>
        ))}
      </div>
      <form className='flex flex-wrap justify-center gap-2 mt-8 px-2'>
        {vegOptions.map((vegName) => (
          <VegSelectButton
            vegName={vegName}
            key={vegName}
            onClick={changeHandler}
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
