import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import "./index.css"
import App from './App';
import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk';
import AllCoursesReducer from "./store/reducers/AllCoursesReducer";
import TraineeTrackReducer from "./store/reducers/TraineeTrackReducer";
import TranscriptReducer from "./store/reducers/TranscriptReducer";
import AllTraineesReducer from "./store/reducers/AllTraineesReducer"
import aboutReducer from './store/reducers/aboutReducer';
import TraineeReducer from './store/reducers/TraineeReducer';

const rootReducer = combineReducers({
    as: aboutReducer,
    allCourses:AllCoursesReducer,
    allTraineeTracks:TraineeTrackReducer,
    transcript:TranscriptReducer,
    allTrainees:AllTraineesReducer,
    user:TraineeReducer
    // session: sessionReducer,
})


const transcriptStore =createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={transcriptStore}>
        <App/>
    </Provider>
    ,
    document.getElementById("root")
);