import Date from '../../ui/Date';
import { areAllCallsNotArchived } from '../../utils/helpers';
import CallItem from './CallItem';

function InboxCalls({ dateWiseCalls }) {
  return (
    <>
      {dateWiseCalls.map((dateCallsObj) => {
        return areAllCallsNotArchived(dateCallsObj.calls) ? (
          <div
            key={dateCallsObj.date}
            className='flex flex-col items-center gap-2'
          >
            <Date date={dateCallsObj.date} />
            {dateCallsObj.calls.map((call) => {
              if (!call.is_archived)
                return <CallItem call={call} key={call.id} />;
              else return null;
            })}
          </div>
        ) : (
          ''
        );
      })}
    </>
  );
}

export default InboxCalls;
