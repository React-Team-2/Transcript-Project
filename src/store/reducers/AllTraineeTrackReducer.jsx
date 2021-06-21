import * as actions from "../actions/action"

const initialState={
    loading:false,
    tracks:[],
    error:""
}
const AllTraineeTracksReducer = (state=initialState, action) => {
    

    switch(action.type){
        case actions.FETCH_TRACKS:
           return {
            ...state.tracks,
               tracks: action.payload,
               loading:true
           }
        case actions.ADD_TRACK:
            return {
                ...state.tracks,
                tracks: action.payload,
            }
        case actions.FETCH_TRAINEE_TRACK:
            return {
                tracks: action.payload
            }

        default: return state
    }
   
}

export default AllTraineeTracksReducer;
