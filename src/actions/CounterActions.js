/**
 * Auth Actions
 * Auth Action With Google, Facebook, Twitter and Github
 */
import {
  COUNTER_INCREASE,
  COUNTER_DECREASE,
  COUNTER_RESET,
  COUNTER_DELETE,
} from "./types";

/**
 * Redux Action To Sigin User With Firebase
 */
export const counterIncrement = (position) => ({
  type: COUNTER_INCREASE,
  payload: { position: position },
});

/**
 * Redux Action Signin User Success
 */
export const counterDecrement = (position) => ({
  type: COUNTER_DECREASE,
  payload: { position },
});

/**
 * Redux Action To Signup User Success
 */
export const countersReset = () => ({
  type: COUNTER_RESET,
});

/**
 * Redux Action To Signup User Failure
 */
export const counterDelete = (position) => ({
  type: COUNTER_DELETE,
  payload: { position },
});
