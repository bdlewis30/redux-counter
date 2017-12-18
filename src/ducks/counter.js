// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

// TYPES
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// ACTION BUILDERS are exported NOT default
export function increment(amount) {
    return {
        type: INCREMENT,
        payload: amount
    }
}

// Action builders always return an object
export function decrement(amount) {
    return {
        type: DECREMENT,
        payload: amount
    }
}

const initialState = {
    currentValue: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            //1. setup changing data - currentValue
            let sum = state.currentValue + action.payload;
            //2. Put changes on new state and return
            return Object.assign({}, state, { currentValue: sum });
        case DECREMENT:
            let differnece = state.currentValue - action.payload;
            return Object.assign({}, state, { currentValue: differnece })
    }
}