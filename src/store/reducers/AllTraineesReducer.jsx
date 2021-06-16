import * as actions from "../actions/action"
const initialState={
    loading:false,
    trainees:[],
    currentTrainee:{
        id:"",
        firstName:"",
        lastName:"",

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
                newTrainee:state.currentTrainee.concat({})
            }
        case actions.fetchFailure:
        return{
            loading:false,
            tracks:[],
            error:action.payload
        }
        default: return state
    }
}
export default AllTraineesReducer;