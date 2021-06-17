import * as actions from "../actions/action"
const initialState={
    loading:false,
    trainees:[],
    currentTrainee:{
        id:"",
        fName:"",
        lName:"",
        currentTrack:"",
        date:""

    }
}

const AllTraineesReducer = (state=initialState,action) => {
    
    switch(action.type){
        case actions.fetchRequest:
            return{
               ...state,
               loading:true
            }
        case actions.fetchTrainees:
        return{
            loading:false,
            trainees:action.payload,
            error:""
        }
        case actions.addTrainee:
            return{
                ...state,
                newTrainee:state.trainees.concat(state.currentTrainee)
            }
        case actions.fetchFailure:
        return{
            loading:false,
            trainees:[],
            error:action.payload
        }
        default: return state
    }
}
export default AllTraineesReducer;