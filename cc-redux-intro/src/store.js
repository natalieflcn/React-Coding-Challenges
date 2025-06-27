import { combineReducers, createStore } from "redux";
import { accountReducer } from "./features/accounts/accountSlice";
import { customerReducer } from "./features/accounts/customerSlice";

const rootReducer = combineReducers(accountReducer, customerReducer);

const store = createStore(rootReducer);

export default store;
