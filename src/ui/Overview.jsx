import { useCall } from '../contexts/CallContext';
import BRAND_NAME from '../utils/constants';

function Overview({ totalCalls = 12, brandName = BRAND_NAME }) {
  const { inboxCallsCount } = useCall();
  return (
    <div className='text-slate-600 font-sans font-semibold text-sm'>
      ({inboxCallsCount}) {brandName} Phone
    </div>
  );
}

export default Overview;
