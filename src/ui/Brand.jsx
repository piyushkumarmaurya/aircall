import { Phone } from '@phosphor-icons/react';
import BRAND_NAME from '../utils/Constants';

function Brand() {
  return (
    <div className='flex gap-2 m-4 items-center'>
      <div className='border-[#2AC420] border-2 rounded-full'>
        <div className='p-1'>
          <Phone fill='#2AC420' size={24} weight='fill' />
        </div>
      </div>

      <span className='font-sans font-semibold text-2xl text-slate-600'>
        {BRAND_NAME}
      </span>
    </div>
  );
}

export default Brand;
