import { NavLink } from 'react-router-dom';
import NavTab from '../pages/NavTab';
import Brand from './Brand';

function NavBar() {
  return (
    <div className='flex items-center border-b-2 outline-offset-0 border-e shadow-[0_1px_1px_-6px_rgba(0,0,0,0.1)] relative bg-white'>
      <NavLink to='' className='rounded-br-3xl'>
        <Brand />
      </NavLink>

      <NavTab />
      {/* <div className='bg-gray-200 absolute h-[50%] w-[24px] z-10 align-bottom top-[50%] left-[34%]'></div> */}
    </div>
  );
}

export default NavBar;
