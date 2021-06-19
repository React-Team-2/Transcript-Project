import * as actions from "../actions/action"

const initialState={
    loading:false,
    tracks:[],
    error:""
}
const AllTraineeTracksReducer = (state={tracks:[], fetched:false}, action) => {
    

    switch(action.type){
        case "UPDATE_TRACKS":
           return {
            ...state.tracks,
               tracks: action.payload,
               fetched:true
           }
        case actions.ADD_TRACK:
            return {
                ...state.tracks,
                tracks: action.payload,
            }
          

        default: return state
    }
   
}

export default AllTraineeTracksReducer;
