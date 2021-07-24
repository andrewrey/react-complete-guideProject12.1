// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.val;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const appStore = configureStore({
  reducer: counterSlice.reducer,
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
