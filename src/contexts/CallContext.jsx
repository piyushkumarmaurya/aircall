import { createContext, useContext, useEffect, useReducer } from 'react';
import dateWiseCallsMaker, {
  archiveCallsArrMaker,
  unarchivedCallsCounter,
  uniqueCallsArrMaker,
} from '../utils/helpers';
import { getCallRecords } from '../services/apiCalls';

const CallContext = createContext();

const initialState = {
  showModal: false,
  calls: [],
  inboxCallsCount: 0,
  dateWiseCalls: [],
  dateWiseUniqueCalls: [],
  dateWiseArchiveCalls: [],
  selectedCall: {},
};

function reducer(state, action) {
  switch (action.type) {
    case 'call/load':
      return { ...state, calls: action.payload };

    case 'call/datewise':
      return { ...state, dateWiseCalls: action.payload };

    case 'call/setinboxcallscount':
      return { ...state, inboxCallsCount: action.payload };

    case 'archivecall/datewise':
      return { ...state, dateWiseArchiveCalls: action.payload };

    case 'call/datewiseunique':
      return {
        ...state,
        dateWiseUniqueCalls: action.payload,
      };

    case 'modal/toggle':
      return {
        ...state,
        showModal: !state.showModal,
        selectedCall: state.calls.find((call) => call.id === action.payload),
      };

    case 'modal/close':
      return {
        ...state,
        showModal: false,
      };

    case 'call/archive':
      state.calls.find((call) => call.id === action.payload).is_archived = true;
      return { ...state, calls: [...state.calls], showModal: false };

    case 'call/unarchive':
      state.calls.find(
        (call) => call.id === action.payload
      ).is_archived = false;
      return { ...state, calls: [...state.calls], showModal: false };

    case 'call/archiveall':
      const allCallsArchived = state.calls.map((call) => {
        return { ...call, is_archived: true };
      });
      return { ...state, calls: allCallsArchived };

    case 'call/unarchiveall':
      const allCallsUnarchived = state.calls.map((call) => {
        return { ...call, is_archived: false };
      });
      return { ...state, calls: allCallsUnarchived };

    default:
      throw new Error('Action Unknown');
  }
}

function CallProvider({ children }) {
  const [
    {
      showModal,
      calls,
      dateWiseCalls,
      dateWiseUniqueCalls,
      dateWiseArchiveCalls,
      selectedCall,
      inboxCallsCount,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  //Get calls from server using API
  useEffect(() => {
    async function getCalls() {
      const calls = await getCallRecords();

      dispatch({ type: 'call/load', payload: calls });
    }
    getCalls();
  }, []);

  //Datewise calls
  useEffect(
    function () {
      const dateWiseCalls = dateWiseCallsMaker(calls);
      const totalUnarchivedCalls = unarchivedCallsCounter(calls);
      dispatch({
        type: 'call/datewise',
        payload: dateWiseCalls,
      });

      dispatch({
        type: 'call/setinboxcallscount',
        payload: totalUnarchivedCalls,
      });
    },
    [calls]
  );

  //Datewise archive calls
  useEffect(
    function () {
      if (dateWiseCalls) {
        const dateWiseArchiveCalls = dateWiseCalls.map((dateCallsObj) => {
          return {
            date: dateCallsObj.date,
            calls: archiveCallsArrMaker(dateCallsObj.calls),
          };
        });

        dispatch({
          type: 'archivecall/datewise',
          payload: dateWiseArchiveCalls,
        });
      }
    },
    [dateWiseCalls]
  );

  //Datewise unique calls
  useEffect(
    function () {
      if (dateWiseCalls) {
        const dateWiseUniqueCalls = dateWiseCalls.map((dateCallsObj) => {
          return {
            date: dateCallsObj.date,
            calls: uniqueCallsArrMaker(dateCallsObj.calls),
          };
        });
        dispatch({ type: 'call/datewiseunique', payload: dateWiseUniqueCalls });
      }
    },
    [dateWiseCalls]
  );

  return (
    <CallContext.Provider
      value={{
        showModal,
        calls,
        dateWiseCalls,
        dateWiseUniqueCalls,
        dateWiseArchiveCalls,
        selectedCall,
        dispatch,
        inboxCallsCount,
      }}
    >
      {children}
    </CallContext.Provider>
  );
}

function useCall() {
  const context = useContext(CallContext);
  if (context === undefined)
    throw new Error('CallContext was used outside of the CallProvider');
  return context;
}

export { CallProvider, useCall };
