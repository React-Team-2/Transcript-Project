import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import loginReducer from './store/reducers/loginReducer';
import aboutReducer from './store/reducers/aboutReducer';
import {sessionReducer } from "redux-react-session";

const rootReducer = combineReducers({
    as: aboutReducer,
    // session: sessionReducer,
})


const transcriptStore =createStore(rootReducer)

ReactDOM.render(
    <Provider store={transcriptStore}>
        <App/>
    </Provider>
    ,
    document.getElementById("root")
);