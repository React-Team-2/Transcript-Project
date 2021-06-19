
import axios from "axios";

export const FETCH_COURSES = "FETCH_COURSES";
export const FETCH_TRACKS ="FETCH_TRACKS";
export const FETCH_TRAINEES="FETCH_TRAINEES"
export const FETCH_REQUEST="FETCH_REQUEST";
// const FETCH_SUCCESS="FETCH_SUCCESS"
export const FETCH_FAILURE="FETCH_FAILURE";
export const ADD_COURSE="ADD_COURSE";
export const ADD_TRAINEE="ADD_TRAINEE";
export const ADD_TRACK="ADD_TRACK";
export const ASSIGN_COURSE="ASSIGN_COURSE"
export const FETCH_TRAINEE_COURSE="FETCH_TRAINEE_COURSE"
export const FETCH_TRAINEE_TRACK="FETCH_TRAINEE_TRACK"



//action creators


export const fetchRequest=()=>{
    return{
        type:FETCH_REQUEST
    }
}

export const fetchCoursesSuccess=(courses)=>{
    return{
        type:FETCH_COURSES,
        payload:courses
    }
}

export const fetchFailure=(error)=>{
    return{
        type:FETCH_FAILURE,
        payload:error
    }
}
export const fetchTraineeSuccess=(trainees)=>{
    return{
        type: FETCH_TRAINEES,
        payload: trainees
    }
}
export const fetchTracksSuccess=(tracks)=>{
    return{
        type: FETCH_TRACKS,
        payload: tracks
    }
}
export const fetchTraineeCourseSuccess=(traineeCourses)=>{
    return{
        type: FETCH_TRAINEE_COURSE,
        payload: traineeCourses
    }
}
export const fetchTraineeTrackSuccess=(traineeTrack)=>{
    return{
        type: FETCH_TRAINEE_TRACK,
        payload: traineeTrack
    }
}

export const fetchCourses=()=>{
   return (dispatch)=>{
       dispatch(fetchRequest)
       const baseUrl="https://amalitech-tms.herokuapp.com"
       const config={ headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4",
      }}
       axios.get(baseUrl,config).then(res=>{
         const courses=res.data.result
         dispatch(fetchCoursesSuccess(courses))
       }).catch(error=>{
          const errMsg = error.message
          dispatch(fetchFailure(errMsg))
       })
   }
}



export const fetchTracks=()=>{
    return (dispatch)=>{
        dispatch(fetchRequest)
        const baseUrl="https://amalitech-tms.herokuapp.com"
        const config={ headers: {
         Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4",
       }}
        axios.get(baseUrl,config).then(res=>{
          const tracks=res.data.result
          dispatch(fetchTracksSuccess(tracks))
        }).catch(error=>{
           const errMsg = error.message
           dispatch(fetchFailure(errMsg))
        })
    }
}

export const fetchTrainees=()=>{
    return (dispatch)=>{
        dispatch(fetchRequest)
        
        const url="https://amalitech-tms.herokuapp.com/users"
        const config={ headers: {
         Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiNjY0MmI4YzkyYmQzNWIwOWE1NDc3IiwiaWF0IjoxNjIzOTM3MDU5fQ.dyLUmuRTUOmb8o0tUwhJQFdz4RKUhbM9yhcqQqM851A",
       }}
        axios.get(url,config).then(res=>{
          const trainees=res.data.result
          dispatch(fetchTraineeSuccess(trainees))
                
      
         
        }).catch(error=>{
           const errMsg = error.message
            dispatch(fetchFailure(errMsg))
        })
    }
}



export const fetchTraineeCourse=()=>{
    return (dispatch)=>{
        dispatch(fetchRequest)
        const baseUrl="https://amalitech-tms.herokuapp.com"
        const config={ headers: {
         Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4",
       }}
        axios.get(baseUrl,config).then(res=>{
          const courses=res.data.result
          dispatch(fetchTraineeCourseSuccess(courses))
        }).catch(error=>{
           const errMsg = error.message
           dispatch(fetchFailure(errMsg))
        })
    }
}


export const fetchTraineeTrack=()=>{
    return (dispatch)=>{
        dispatch(fetchRequest)
        const baseUrl="https://amalitech-tms.herokuapp.com"
        const config={ headers: {
         Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4",
       }}
        axios.get(baseUrl,config).then(res=>{
          const courses=res.data.result
          dispatch(fetchTraineeTrackSuccess(courses))
        }).catch(error=>{
           const errMsg = error.message
           dispatch(fetchFailure(errMsg))
        })
    }
}



export const addTrainee=(trainee)=>{
    console.log(trainee);
   return ()=>{
    const url="https://amalitech-tms.herokuapp.com/users"
    const config={ headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiNjY0MmI4YzkyYmQzNWIwOWE1NDc3IiwiaWF0IjoxNjIzOTM3MDU5fQ.dyLUmuRTUOmb8o0tUwhJQFdz4RKUhbM9yhcqQqM851A",
      }}
    
    axios.post(url, trainee,config).then(res=>{
        console.log(res.data)
     
    }).catch(error=>{
        if(error) console.log(error.response.data)

    })
   }
}


export const addCourse=()=>{
    return{
        type:ADD_COURSE

    }
   
}


export const addTrack=()=>{
    return{
        type:ADD_TRACK

    }
}

export const assignCourse=()=>{
    return{
        type:ASSIGN_COURSE

    }
}

export const save=()=>{
     
}

export const update=()=>{

}

export const delItem=()=>{
    
  
      
}




