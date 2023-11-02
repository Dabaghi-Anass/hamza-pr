import { combineReducers } from "redux";
import searchReducer from "./reducers";
const rootReducer = combineReducers({search : searchReducer});

export default rootReducer;