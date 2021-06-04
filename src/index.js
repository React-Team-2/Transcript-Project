import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {createStore,combineReducers} from 'redux';
import aboutReducer from './store/reducers/aboutReducer'

const rootReducer = combineReducers({
    as: aboutReducer,
})


const transcriptStore =createStore(rootReducer)

ReactDOM.render(
    <Provider store={transcriptStore}>
        <App/>
    </Provider>
    ,
    document.getElementById("root")
);