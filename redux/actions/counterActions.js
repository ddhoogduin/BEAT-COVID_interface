import {DECREMENT_COUNTER, INCREMENT_COUNTER} from '../constants';

export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});
