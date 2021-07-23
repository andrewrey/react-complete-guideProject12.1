import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "increase":
      return { counter: state.counter + action.val };
    default:
      return state;
  }
};

const appStore = createStore(counterReducer);

export default appStore;
