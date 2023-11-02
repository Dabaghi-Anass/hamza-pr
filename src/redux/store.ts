import { configureStore } from "@reduxjs/toolkit";
// import pokemonReducer from "./reducers";
import rootReducer from "./root_reducer";
const store = configureStore({
  reducer : rootReducer
});

export default store;