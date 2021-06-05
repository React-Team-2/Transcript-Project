import {combineReducers} from 'redux';

//session
import {sessionReducer } from "redux-react-session";

const loginReducer = combineReducers({
    session: sessionReducer
});

export default loginReducer;