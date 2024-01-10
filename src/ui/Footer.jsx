import {
  DotsNine,
  Gear,
  Phone,
  RadioButton,
  User,
} from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { useCall } from '../contexts/CallContext';

function Footer() {
  const { inboxCallsCount } = useCall();

  return (
    <ul className='bg-white border-t-[1px] p-4 flex justify-between'>
      <li className='relative'>
        <NavLink
          to='inbox'
          className={({ isActive }) =>
            isActive
              ? `after:content after:block after:absolute after:bg-[#2AC420] after:h-1 after:w-full after:top-[40px]`
              : ''
          }
        >
          <Phone size={28} weight='fill' />
          <div className='flex justify-center absolute -top-2 left-4 bg-orange-600 text-white w-7 rounded-full text-sm font-bold'>
            {inboxCallsCount}
          </div>
        </NavLink>
      </li>
      <li className='relative'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? `after:block after:absolute after:bg-[#2AC420] after:h-1 after:w-full after:top-[40px]`
              : ''
          }
        >
          <User size={28} />
        </NavLink>
      </li>
      <li>
        <NavLink to='/screen'>
          <div
            className={`relative after:bg-[#2AC420] after:h-16 after:w-16 after:rounded-full after:absolute after:-top-10 after:-left-7 after:content-[''] before:bg-white before:h-20 before:w-20 before:rounded-full before:absolute before:-top-[2.95rem] before:-left-[2.25rem] before:content-[''] before:border before:shadow`}
          >
            <DotsNine
              size={50}
              className='absolute z-10 -top-8 -left-[1.30rem] '
              fill='#fff'
            />
          </div>
        </NavLink>
      </li>
      <li className='relative'>
        <NavLink>
          <Gear size={28} />
        </NavLink>
      </li>
      <li className='relative'>
        <NavLink>
          <RadioButton size={28} weight='fill' fill='#2AC420' />
        </NavLink>
      </li>
    </ul>
  );
}

export default Footer;
