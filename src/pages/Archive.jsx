import { useCall } from '../contexts/CallContext';
import ArchiveCalls from '../features/archive/ArchiveCalls';
import ArchiveUnarchiveModal from '../features/archive/ArchiveUnarchiveModal';
import ArchiveUnarchiveAll from '../ui/ArchiveUnarchiveAll';

function Archive() {
  const { dateWiseArchiveCalls } = useCall();
  return (
    <div className='flex flex-col items-center gap-2 overflow-auto relative mt-2 mb-2 min-h-[30rem]'>
      <ArchiveUnarchiveModal />
      <ArchiveUnarchiveAll />
      <ArchiveCalls dateWiseCalls={dateWiseArchiveCalls} />
    </div>
  );
}

export default Archive;
