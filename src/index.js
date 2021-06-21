import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import "./index.css"
import App from './App';
import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk';
import AllCoursesReducer from "./store/reducers/AllCoursesReducer";
import AllTraineeTrackReducer from "./store/reducers/AllTraineeTrackReducer";
import TranscriptReducer from "./store/reducers/TranscriptReducer";
import AllTraineesReducer from "./store/reducers/AllTraineesReducer"
import aboutReducer from './store/reducers/aboutReducer';
import TraineeReducer from './store/reducers/TraineeReducer';
import TraineeCourseReducer from './store/reducers/TraineeCourseReducer';
import TraineeTracksReducer from './store/reducers/TraineeTrackReducer';

const rootReducer = combineReducers({
    as: aboutReducer,
    allCourses:AllCoursesReducer,
    allTraineeTracks:AllTraineeTrackReducer,
    transcript:TranscriptReducer,
    allTrainees:AllTraineesReducer,
    user:TraineeReducer,
    traineeCourses: TraineeCourseReducer,
    traineeTracks: TraineeTracksReducer
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