


const AllTraineesReducer = (state={trainees:[],fetched:false},action) => {
    
    switch(action.type){
        case "GET_COURSES":
            return{
               trainees:action.payload,
                fetched:true
            }
        default: return state
    }
}
export default AllTraineesReducer;