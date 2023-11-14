'use client';
import { useEffect, useState } from 'react';
import VegSelectButton from './VegSelectButton';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type VegNamesType =
  | Array<{
      id: number;
      name: string;
    }>
  | [];

const EditGrowingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [vegOptions, setVegOptions] = useState<VegNamesType>([]);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClientComponentClient();
      const { data, error } = await supabase.from('veg').select('name');
      // const vegOptionsArray = data.map((veg) => );

      if (error) {
        console.error('Error fetching data:', error.message);
      }
      console.log(data);
    };
    fetchData();
  }, [setVegOptions]);

  const selectedStateHandler = () => {
    console.log('Hi');
  };

  return (
    <>
      {!isExpanded && (
        <button className='bg-primaryLight shadow hover:bg-bitterRed text-primaryDark hover:text-primaryLight font-bold py-1 px-2 rounded inline-flex items-center transition duration-200 ease-in-out transform active:translate-y-1 active:shadow-inner'>
          Edit
        </button>
      )}
      {isExpanded && (
        <div className='w-full'>
          {vegOptions.map((veg) => (
            <VegSelectButton
              vegName={veg.name}
              key={veg.name}
              selectedStateHandler={selectedStateHandler}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default EditGrowingButton;
