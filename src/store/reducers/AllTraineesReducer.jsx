import * as actions from "../actions/action"
const initialState={
    loading:false,
    trainees:[
        
    ],
    currentTrainee:{
        id:"",
        firstname:"",
        lastname:"",
        currentTrack:"",
        date:""

    }
}

const AllTraineesReducer = (state=initialState,action) => {
    console.log(action.type)
    switch(action.type){
        case actions.FETCH_REQUEST:
            return{
               ...state,
               loading:true
            }
        case actions.FETCH_TRAINEES:
        return{
            ...state,
            loading:false,
            trainees:state.trainees.concat(action.payload),
            error:""
        }
        case actions.ADD_TRAINEE:
            return{
                ...state,
                newTrainee:state.trainees.concat(state.currentTrainee)
               
            }
        case actions.FETCH_FAILURE:
        return{
            loading:false,
            trainees:[],
            error:action.payload
        }
        default: return state
    }
}
export default AllTraineesReducer;