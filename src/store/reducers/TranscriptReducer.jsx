
const transcriptState={
    traineeName:"Victor Aremu",
    traineeID:"TKB3-001",
    batch:"Batch 3",
    track:"Media & Design",
    isLoading:false,
    

    results:{
        java:90,
        python:100
        
    }
         
    
}



const TranscriptReducer = (state=transcriptState,action) => {
      switch(action.type){
          case "GET_TRANSCRIPT":
            return{
                ...state,
                fetched:state.isLoading,
                javaResults:state.results.java,
                pythonResults:state.results.python
            } 
          default: return state
      }
   
    
}
 export default TranscriptReducer;
