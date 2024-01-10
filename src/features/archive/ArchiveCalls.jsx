import Date from '../../ui/Date';
import CallItem from '../inbox/CallItem';

function ArchiveCalls({ dateWiseCalls }) {
  return (
    <>
      {dateWiseCalls.map((dateCallsObj) => {
        if (dateCallsObj.calls.length)
          return (
            <div
              key={dateCallsObj.date}
              className='flex flex-col items-center gap-2'
            >
              <Date date={dateCallsObj.date} />
              {dateCallsObj.calls.map((call) => {
                if (call.is_archived)
                  return <CallItem call={call} key={call.id} />;
                else return null;
              })}
            </div>
          );
        else return null;
      })}
    </>
  );
}

export default ArchiveCalls;
