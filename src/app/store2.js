import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import Lokacije from "./reducers/Lokacije";

export default createStore(Lokacije,{},applyMiddleware(thunk));
