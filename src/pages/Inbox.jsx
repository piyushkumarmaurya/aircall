import { useCall } from '../contexts/CallContext';
import ArchiveUnarchiveModal from '../features/archive/ArchiveUnarchiveModal';
import InboxCalls from '../features/inbox/InboxCalls';
import ArchiveUnarchiveAll from '../ui/ArchiveUnarchiveAll';

function Inbox() {
  const { dateWiseUniqueCalls } = useCall();
  return (
    <div className='flex flex-col items-center gap-2 overflow-auto relative mt-2 mb-2 min-h-[30.2rem]'>
      <ArchiveUnarchiveModal />
      <ArchiveUnarchiveAll />
      <InboxCalls dateWiseCalls={dateWiseUniqueCalls} />
    </div>
  );
}

export default Inbox;
