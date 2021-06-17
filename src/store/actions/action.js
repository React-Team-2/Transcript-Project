
import axios from "axios";


const FETCH_COURSES = "FETCH_COURSES";
const FETCH_TRACKS ="FETCH_TRACKS";
const FETCH_TRAINEES="FETCH_TRAINEES"
const FETCH_REQUEST="FETCH_REQUEST";
// const FETCH_SUCCESS="FETCH_SUCCESS"
const FETCH_FAILURE="FETCH_FAILURE";
const ADD_COURSE="ADD_COURSE";
const ADD_TRAINEE="ADD_TRAINEE";
const ADD_TRACK="ADD_TRACK";
const ASSIGN_COURSE="ASSIGN_COURSE"
const FETCH_TRAINEE_COURSE="FETCH_TRAINEE_COURSE"
const FETCH_TRAINEE_TRACK="FETCH_TRAINEE_TRACK"



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
        const baseUrl="https://amalitech-tms.herokuapp.com"
        const config={ headers: {
         Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4",
       }}
        axios.get(baseUrl,config).then(res=>{
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
   return ()=>{
    const url="https://amalitech-tms.herokuapp.com"
    
    axios.post(url,{trainee}).then(res=>{
        console.log(res.body.data)
    }).catch(error=>{
        console.log(error)
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




