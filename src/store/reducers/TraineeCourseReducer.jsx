

const courseState =[
    {id:"1",title:"Programming with Java",code:"PWJ",date:"2021-01-04"},
    {id:"2",title:"Programming with Python",code:"PWJ",date:"2021-01-04"},
    {id:"3",title:"Relational Database",code:"PWJ",date:"2021-01-04"},
    {id:"4",title:"Web Engineering",code:"PWJ",date:"2021-01-04"},
    {id:"5",title:"Testing with Cypress",code:"STWC",date:"2021-03-15"},
    {id:"6",title:"ReactJs",code:"React",date:"2021-03-15"}
]
   


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
