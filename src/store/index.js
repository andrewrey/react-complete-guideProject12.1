// import { createStore } from "redux";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default appStore;

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   switch (action.type) {
//     case "increment":
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case "decrement":
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     case "increase":
//       return {
//         counter: state.counter + action.val,
//         showCounter: state.showCounter,
//       };
//     case "toggle":
//       return { counter: state.counter, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };
