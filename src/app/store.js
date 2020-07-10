import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./containers/Counter/counterSlice";
import testReducer from "./containers/Dashboard/dashboardSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    test: testReducer,
  },
});
