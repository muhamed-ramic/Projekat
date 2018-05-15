import {createStore,combineReducers,applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import user from "./reducers/userReducer";
import Math from "./reducers/Mathreducer";
export default createStore(combineReducers({user,Math}),{},applyMiddleware(createLogger(),thunk));
