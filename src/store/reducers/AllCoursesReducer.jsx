import * as actions from "../actions/action"
const initialState={
    laoding:false,
    courses:[],
    error:""
}

const AllCoursesReducer = (state=initialState, action) => {
    

    switch(action.type){
        case actions.FETCH_COURSES:
           return {
            ...state.courses,
               courses: action.payload,
               loading:true
           }
        case actions.addCourse:
            return{
                newCourse:initialState.courses.concat({})
            }
          

        default: return state
    }
   
}

export default AllCoursesReducer;
