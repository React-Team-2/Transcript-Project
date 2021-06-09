
const AllCoursesReducer = (state={courses:[], fetched:false}, action) => {
    

    switch(action.type){
        case "UPDATE_COURSES":
           return {
            ...state.courses,
               courses: action.payload,
               fetched:true
           }
          

        default: return state
    }
   
}

export default AllCoursesReducer;
