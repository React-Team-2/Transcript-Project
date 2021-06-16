import * as actions from "../actions/action"
const initialState={
    laoding:false,
    courses:[],
    error:""
}

const AllCoursesReducer = (state={courses:[], fetched:false}, action) => {
    

    switch(action.type){
        case "UPDATE_COURSES":
           return {
            ...state.courses,
               courses: action.payload,
               fetched:true
           }
        case actions.addCourse:
            return{
                newCourse:initialState.courses.concat({})
            }
          

        default: return state
    }
   
}

export default AllCoursesReducer;
