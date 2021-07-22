import store from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const appStore = store.createStore(counterReducer);

export default appStore;
