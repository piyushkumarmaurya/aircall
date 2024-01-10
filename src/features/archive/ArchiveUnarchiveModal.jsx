import { useLocation } from 'react-router-dom';
import { useCall } from '../../contexts/CallContext';
import CallItem from '../inbox/CallItem';
import { useEffect } from 'react';

function ArchiveUnarchiveModal() {
  const { showModal, selectedCall, dispatch } = useCall();

  const { pathname } = useLocation();

  useEffect(
    function () {
      dispatch({ type: 'modal/close', payload: false });
    },
    // eslint-disable-next-line
    [pathname]
  );

  return showModal ? (
    //Overlay
    <div className='h-[100%] w-[100%] bg-[rgba(200,200,200,0.9)] fixed'>
      {/* Modal */}
      <div className='border w-[90%] h-[30%] bg-gray-100 rounded-2xl grid grid-rows-[1fr_7fr_2fr] grid-cols-1 items-start justify-items-center pb-2 opacity-100 z-[999] absolute top-[20%] left-[5%]'>
        <button
          className='bg-red-400 text-red-100 rounded-3xl w-8 h-8 hover:bg-red-500 justify-self-end mt-1 mr-1'
          onClick={() => dispatch({ type: 'modal/close' })}
        >
          x
        </button>
        <div className='w-[100%] flex items-center justify-center mt-5 place-items-center'>
          <CallItem call={selectedCall} />
        </div>
        <button
          className={`bg-amber-400 rounded-3xl h-8 w-24 hover:bg-amber-500 text-amber-900`}
          onClick={() => {
            if (pathname === '/screen/inbox')
              dispatch({ type: 'call/archive', payload: selectedCall.id });
            if (pathname === '/screen/archive')
              dispatch({ type: 'call/unarchive', payload: selectedCall.id });
          }}
        >
          {pathname === '/screen/inbox' && 'Archive'}
          {pathname === '/screen/archive' && 'Unarchive'}
        </button>
      </div>
    </div>
  ) : (
    ''
  );
}

export default ArchiveUnarchiveModal;
