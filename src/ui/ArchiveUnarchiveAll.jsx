import { useLocation } from 'react-router-dom';
import { useCall } from '../contexts/CallContext';
import { DownloadSimple, UploadSimple } from '@phosphor-icons/react';

function ArchiveUnarchiveAll() {
  const { dispatch } = useCall();
  const { pathname } = useLocation();

  return (
    <button
      className='bg-white w-[90%] rounded-2xl flex items-center pl-4 py-4 border-2 gap-3'
      onClick={() => {
        if (pathname === '/screen/inbox') dispatch({ type: 'call/archiveall' });
        if (pathname === '/screen/archive')
          dispatch({ type: 'call/unarchiveall' });
      }}
    >
      {pathname === '/screen/inbox' && (
        <>
          <DownloadSimple size={24} fill='#ea580c' weight='bold' />
          <p className='text-gray-400 text-sm'>Archive all calls</p>
        </>
      )}
      {pathname === '/screen/archive' && (
        <>
          <UploadSimple size={24} fill='#ea580c' weight='bold' />
          <p className='text-gray-400 text-sm'>Unarchive all calls</p>
        </>
      )}
    </button>
  );
}

export default ArchiveUnarchiveAll;
