import { createStore } from "redux";
import reducer from "./data/reducer";
import initial from "./data/initial";

const store = createStore(
  reducer, 
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;