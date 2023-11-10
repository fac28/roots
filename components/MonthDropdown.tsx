import { BsChevronCompactDown } from 'react-icons/bs';
import returnMonthAsWord from '@/utils/supabase/models/displayMonthAsWord';
const MonthDropdown = () => {
  return (
    <button className='button gap-2 bg-slate-200 opacity-80 absolute m-2'>
      {returnMonthAsWord()} <BsChevronCompactDown />
    </button>
  );
};

export default MonthDropdown;
