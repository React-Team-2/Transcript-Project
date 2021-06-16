import * as actions from "../actions/action"

const initialState={
    loading:false,
    course:[],
    currentCourse:{
        id:"",
        courseTitle:"",
        courseCode:"",

    }
}


const AllCoursesReducer = (state=initialState,action) => {
    
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

         default: return state
     }
}
export default AllCoursesReducer;
