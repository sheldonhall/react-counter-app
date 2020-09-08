/**
 * Auth User Reducers
 */

import {
  COUNTER_INCREASE,
  COUNTER_DECREASE,
  COUNTER_RESET,
  COUNTER_DELETE,
} from "../actions/types";

/**
 * initial auth user
 */
const INIT_STATE = {
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ],
};

const CounterReducer = (state = INIT_STATE, action) => {
  let newState = {
    counters: state.counters.map((c) => {
      return { ...c };
    }),
  };
  switch (action.type) {
    case COUNTER_INCREASE:
      newState.counters.find(
        (c) => c.id === action.payload.position
      ).value += 1;
      return newState;

    case COUNTER_DECREASE:
      newState.counters.find(
        (c) => c.id === action.payload.position
      ).value -= 1;
      return newState;

    case COUNTER_RESET:
      return { counters: [...INIT_STATE.counters] };

    case COUNTER_DELETE:
      newState.counters = [
        ...state.counters.filter((c) => {
          return c.id !== action.payload.position;
        }),
      ];
      return newState;

    default:
      return { ...INIT_STATE };
  }
};

export default CounterReducer;
