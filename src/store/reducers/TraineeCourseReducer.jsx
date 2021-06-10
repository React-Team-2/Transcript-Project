



const AllCoursesReducer = (state={courses:[],fetched:false},action) => {
    
     switch(action.type){
         case "GET_COURSES":
             return{
                 courses:action.payload,
                 fetched:true
             }
         default: return state
     }
}
export default AllCoursesReducer;
