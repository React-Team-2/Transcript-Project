import * as actions from "../actions/action"

const TraineeReducer = (state={user:null},action) => {
    
     switch(action.type){
        
         case actions.FETCH_USER_DETAILS:
            return{
                ...state,
              user:action.payload,
            }  
     
         default: return state
     }
}
export default TraineeReducer;
