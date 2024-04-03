import { subscribe, unsubscribe, publish } from "@/utils/events";
const initialState = { count: 0, userList: [] };

let currentState = initialState;

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN": {
      const token = action.payload.token;
      return { ...state, token };
    }

    default:
      return state;
  }
};

export const authstore = {
  getState: () => currentState,
  dispatch: (action) => {
    currentState = reducer(currentState, action);
    publish("stateChange", currentState);
  },
  subscribe: (listener) => subscribe("stateChange", listener),
  unsubscribe: (listener) => unsubscribe("stateChange", listener),
};
