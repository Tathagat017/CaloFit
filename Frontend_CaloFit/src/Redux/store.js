import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authreducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";
import { reducer as users } from "./AdminUserReducer/adminUserReducer";
const root_Reducer = combineReducers({
  authreducer,
  users,
});
export const store = legacy_createStore(root_Reducer, applyMiddleware(thunk));
