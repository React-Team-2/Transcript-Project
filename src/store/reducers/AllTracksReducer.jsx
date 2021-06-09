
const AllTracksReducer = (state={tracks:[], fetched:false}, action) => {
    

    switch(action.type){
        case "UPDATE_TRACKS":
           return {
               tracks: action.payload,
               fetched:true
           }
          

        default: return state
    }
   
}

export default AllTracksReducer;
