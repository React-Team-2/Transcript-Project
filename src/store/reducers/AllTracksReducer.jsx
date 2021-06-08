
// const trackState =[
//     {id:"1",title:"Foundation",code:"PWJ",date:"2021-01-04"},
//     {id:"2",title:"Media & Design",code:"PWJ",date:"2021-01-04"},
//     {id:"3",title:"Software Development & Evolution",code:"PWJ",date:"2021-01-04"},
//     {id:"4",title:"Machine Learning & Data Analytics",code:"PWJ",date:"2021-01-04"},
//     {id:"5",title:"Salesforce Commerce Cloud Development",code:"STWC",date:"2021-03-15"},
    
// ]




const AllTracksReducer = (state=[], action) => {

    switch(action.type){
        case "UPDATE_TRACKS":
           return action.value
        default: return state
    }
}

export default AllTracksReducer;
