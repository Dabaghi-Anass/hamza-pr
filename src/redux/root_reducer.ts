import { combineReducers } from "redux";
import searchReducer from "./reducers";
import pokemonsReducer from "./pokemons";

const rootReducer = combineReducers({search : searchReducer , pokemon : pokemonsReducer});

export default rootReducer;