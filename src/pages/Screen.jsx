import Header from '../ui/Header';
import { useOutlet } from 'react-router-dom';
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';
import Placeholder from '../ui/Placeholder';

function Screen() {
  const outlet = useOutlet();

  return (
    <div className='flex flex-col w-[330px] h-[667px] rounded-2xl overflow-hidden shadow-[0_0_5px_0_rgba(0,0,0,0.9)] bg-gray-100 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
      <Header />
      <NavBar />
      {outlet || <Placeholder />}
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}

export default Screen;
