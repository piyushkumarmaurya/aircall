import { format } from 'date-fns';

export default function dateWiseCallsMaker(callsArr) {
  if (callsArr.length > 0)
    return callsArr.reduce((acc, call) => {
      // 1. Getting the date of currently iterating call object
      // const curDate = dateFormatter(call.created_at);
      const curDate = format(call.created_at, 'MMMM, dd yyyy');

      //2. Check whether this date is present in the accumulator array
      let dateCallsObj = acc.find((obj) => obj.date === curDate);

      //3. If not present create a new object with the date and calls array and add the call into the calls array.
      if (!dateCallsObj) {
        acc = [
          ...acc,
          {
            date: format(call.created_at, 'MMMM, dd yyyy'),
            calls: [call],
          },
        ];
      }

      //4.If present, find the corresponding object from acc and add the call object in the existing object's calls array
      if (dateCallsObj) {
        dateCallsObj.calls.push(call);
      }

      return acc;
    }, []);
}

export function areAllCallsNotArchived(callsArr) {
  return callsArr.some((call) => !call.is_archived);
}

//TODO: Check if from is Unknown
export const uniqueCallsArrMaker = function (callsArr) {
  const uniqueCallsArr = [];

  for (let i = 0; i < callsArr.length; i++) {
    const call = callsArr[i];

    let uniqueCall = uniqueCallsArr.find(
      (uniqueCall) => uniqueCall.from === call.from
    );

    if (uniqueCall) {
      uniqueCall.noOfCalls = uniqueCall.noOfCalls + 1;
      uniqueCall.areAllCallsArchived = call.areAllCallsArchived;
    } else {
      uniqueCallsArr.push({ ...call, noOfCalls: 1 });
    }
  }

  return uniqueCallsArr;
};

export const archiveCallsArrMaker = function (callsArr) {
  const archiveCallsArr = [];
  for (let i = 0; i < callsArr.length; i++) {
    if (callsArr[i].is_archived) {
      archiveCallsArr.push(callsArr[i]);
    }
  }

  return archiveCallsArr;
};

export function unarchivedCallsCounter(calls) {
  if (calls.length > 0) {
    const totalUnarchivedCalls = calls.reduce((count, call) => {
      if (!call.is_archived) count++;
      return count;
    }, 0);

    return totalUnarchivedCalls;
  }
}
