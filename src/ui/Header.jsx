import Overview from './Overview';
import Button from './Button';

function Header() {
  return (
    <div className='flex py-2 pl-3 items-center justify-between bg-gradient-to-b from-gray-100 to-gray-200'>
      <div id='controls' className='flex gap-3'>
        <Button type='cancel' />
        <Button type='minimise' />
        <Button type='full-screen' />
      </div>
      <div className='flex-1 flex items-center justify-end pr-3'>
        <Overview />
      </div>
    </div>
  );
}

export default Header;
