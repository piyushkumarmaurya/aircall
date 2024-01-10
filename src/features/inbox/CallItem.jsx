import {
  DotsThreeVertical,
  PhoneIncoming,
  PhoneSlash,
  PhoneX,
  Voicemail,
} from '@phosphor-icons/react';
import { format } from 'date-fns';
import { useCall } from '../../contexts/CallContext';
import { PhoneOutgoing } from '@phosphor-icons/react/dist/ssr';
import { BRAND_COLOR } from '../../utils/constants';

function CallItem({
  call: {
    id,
    direction,
    from,
    to,
    call_type: callType,
    is_archived: isArchived,
    created_at: createdAt,
    noOfCalls,
  },
}) {
  //Function body starts
  const { showModal, dispatch } = useCall();

  const fill = (() => {
    switch (callType) {
      case 'answered':
        return BRAND_COLOR;
      case 'missed':
        return '#dc2626';
      case 'voicemail':
        return '#fbbf24';

      default:
        return '#ea580c';
    }
  })();

  return (
    <button
      onClick={() => dispatch({ type: 'modal/toggle', payload: id })}
      className='bg-white w-[90%] rounded-2xl flex items-center pl-4 py-4 border-2'
    >
      {callType === 'missed' && (
        <PhoneX size={24} fill={`${fill}`} weight='fill' />
      )}
      {callType === 'voicemail' && (
        <Voicemail size={24} fill={`${fill}`} weight='fill' />
      )}
      {callType === 'answered' && direction === 'inbound' && (
        <PhoneIncoming size={24} fill={`${fill}`} weight='fill' />
      )}
      {callType === 'answered' && direction === 'outbound' && (
        <PhoneOutgoing size={24} fill={`${fill}`} weight='fill' />
      )}
      {!callType && <PhoneSlash size={24} fill={`${fill}`} weight='fill' />}

      <div className='flex-1 ml-3 flex flex-col items-start'>
        <p className='font-bold text-base flex items-center gap-2'>
          <span>{from || 'Unknown'}</span>
          {noOfCalls && (
            <span className='bg-orange-600 h-5 w-5 rounded-full text-white text-sm font-bold flex items-center justify-center mb-1'>
              {noOfCalls}
            </span>
          )}
        </p>
        {!showModal && (
          <p className='text-gray-400 text-sm -mt-1'>
            {to && `called on ${to}`}
          </p>
        )}
      </div>
      {<DotsThreeVertical size={24} className='text-gray-400' />}
      {
        <p className='font-bold text-sm text-gray-400 ml-1'>
          {format(createdAt, 'hh:mm')}
        </p>
      }
      {
        <p className='font-extrabold text-xs text-gray-400 border-l-2 pl-1 border-y-2 py-0.5 ml-1.5 pr-4 tracking-widest'>
          &nbsp;{format(createdAt, 'a')}
        </p>
      }
    </button>
  );
}

export default CallItem;
