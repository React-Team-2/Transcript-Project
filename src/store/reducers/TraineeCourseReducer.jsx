import * as actions from "../actions/action"

const initialState={
    loading:false,
    courses:[],
}


const TraineeCourseReducer = (state=initialState,action) => {
    
     switch(action.type){
         case actions.fetchRequest:
             return{
                 ...state,
                loading:true,
                courses:[],
                error:''
             }
         case actions.fetchTraineeCourse:
            return{
              loading:true,
              courses:action.payload,
              error:''
            }  
        case actions.fetchFailure:
            return{
              loading:false,
              courses:[],
              error:action.payload
                }       
        case actions.FETCH_TRAINEE_COURSE:
            return {
                courses: action.payload
            }
         default: return state
     }
}
export default TraineeCourseReducer;
