'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import VegSelectButton from '@/components/VegSelectButton';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type VegNamesType =
  | Array<{
      id: number;
      name: string;
    }>
  | [];

const SelectCrops = () => {
  const [selectedCrops, setSelectedCrops] = useState<VegNamesType>([]);
  const [vegOptions, setVegOptions] = useState<VegNamesType>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClientComponentClient();
      const { data, error } = await supabase.from('veg').select('name, id');

      if (error) {
        console.error('Error fetching data:', error.message);
      }
      const vegOptionsArray =
        data?.map((veg) => ({
          name: veg.name,
          id: veg.id,
        })) || [];

      setVegOptions(vegOptionsArray);
    };
    fetchData();
  }, [setVegOptions]);

  const changeHandler = (selectedCrop: { id: number; name: string }) => {
    setSelectedCrops((prevState) => {
      const isCropAlreadySelected = prevState.some(
        (crop) => crop.name === selectedCrop.name
      );
      if (isCropAlreadySelected) {
        return prevState.filter((crop) => crop.name !== selectedCrop.name);
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
        router.push('/mygarden');
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
        {vegOptions.map((veg) => (
          <VegSelectButton
            vegName={veg.name}
            key={veg.name}
            id={veg.id}
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
