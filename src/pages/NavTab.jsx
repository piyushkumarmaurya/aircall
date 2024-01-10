import { DotsThreeVertical } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

function NavTab() {
  return (
    <ul className='bg-gradient-to-tl from-gray-100 to-gray-200 flex-1 mt-1 mr-1 rounded-tr self-stretch flex items-center gap-2 justify-around rounded-tl-3xl'>
      <li className='relative ml-4'>
        <NavLink
          to='inbox'
          className={({ isActive }) =>
            isActive
              ? 'font-semibold text-lg after:content after:block after:absolute after:bg-orange-600 after:h-1 after:w-full after:top-[40px]'
              : 'text-base font-medium'
          }
        >
          Inbox
        </NavLink>
      </li>
      <li>
        <DotsThreeVertical />
      </li>
      <li className='relative'>
        <NavLink
          to='archive'
          className={({ isActive }) =>
            isActive
              ? 'font-semibold text-lg after:content after:block after:absolute after:bg-orange-600 after:h-1 after:w-full after:top-[40px]'
              : 'text-base font-medium'
          }
        >
          Archive
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTab;
