
const AllTraineeTracksReducer = (state={tracks:[], fetched:false}, action) => {
    

    switch(action.type){
        case "UPDATE_TRACKS":
           return {
            ...state.tracks,
               tracks: action.payload,
               fetched:true
           }
          

        default: return state
    }
   
}

export default AllTraineeTracksReducer;
