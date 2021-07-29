import { ActionTypes } from './ActionTypes';

export const CounterReducer = (state, action) => {

    switch (action.type) {

        case ActionTypes.increment:
            return (state + 1);

        case ActionTypes.decrement:
            return (state - 1);

        case ActionTypes.reset:
            return action.payload;

        default:
            break;
    }

}

/* 
    dispatch, state


*/