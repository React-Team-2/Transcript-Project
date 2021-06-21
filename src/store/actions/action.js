import axios from "axios";

export const FETCH_COURSES = "FETCH_COURSES";
export const FETCH_TRACKS = "FETCH_TRACKS";
export const FETCH_TRAINEES = "FETCH_TRAINEES"
export const FETCH_REQUEST = "FETCH_REQUEST";
// const FETCH_SUCCESS="FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_COURSE = "ADD_COURSE";
export const ADD_TRAINEE = "ADD_TRAINEE";
export const ADD_TRACK = "ADD_TRACK";
export const ASSIGN_COURSE = "ASSIGN_COURSE"
export const FETCH_TRAINEE_COURSE = "FETCH_TRAINEE_COURSE"
export const FETCH_TRAINEE_TRACK = "FETCH_TRAINEE_TRACK"
export const FETCH_USER_DETAILS= "FETCH_USER_DETAILS"



//action creators


export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchCoursesSuccess = (courses) => {
    return {
        type: FETCH_COURSES,
        payload: courses
    }
}

export const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}
export const fetchTraineeSuccess = (trainees) => {
    return {
        type: FETCH_TRAINEES,
        payload: trainees
    }
}
export const fetchTracksSuccess = (tracks) => {
    return {
        type: FETCH_TRACKS,
        payload: tracks
    }
}
export const fetchTraineeCourseSuccess = (traineeCourses) => {
    return {
        type: FETCH_TRAINEE_COURSE,
        payload: traineeCourses
    }
}
export const fetchTraineeTrackSuccess = (traineeTrack) => {
    return {
        type: FETCH_TRAINEE_TRACK,
        payload: traineeTrack
    }
}

export const getUserDetail = (user) => {
    return {
        type: FETCH_USER_DETAILS,
        payload:user
    }
}

export const fetchCourses = () => {
    return (dispatch) => {
        dispatch(fetchRequest)
        const baseUrl = "https://amalitech-tms.herokuapp.com/courses"
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`          
              }
        }
        axios.get(baseUrl, config).then(res => {
            const courses = res.data.result
            dispatch(fetchCoursesSuccess(courses))
        }).catch(error => {
            const errMsg = error.message
            dispatch(fetchFailure(errMsg))
        })
    }
}



export const fetchTracks = () => {
    return (dispatch) => {
        const baseUrl = "https://amalitech-tms.herokuapp.com/tracks"
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
            }
        }
        axios.get(baseUrl, config).then(res => {
            const tracks = res.data.result
            dispatch(fetchTracksSuccess(tracks))
        }).catch(error => {
            const errMsg = error.message
            dispatch(fetchFailure(errMsg))
        })
    }
}

export const fetchTrainees = () => {
    return (dispatch) => {
        dispatch(fetchRequest)

        const url = "https://amalitech-tms.herokuapp.com/users"
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
                   }
        }
        axios.get(url, config).then(res => {
            const trainees = res.data.result
            dispatch(fetchTraineeSuccess(trainees))



        }).catch(error => {
            const errMsg = error.message
            dispatch(fetchFailure(errMsg))
        })
    }
}



export const fetchTraineeCourse = (traineeId) => {
    return (dispatch) => {
        dispatch(fetchRequest)
        const baseUrl = `https://amalitech-tms.herokuapp.com/courses/?user=${traineeId}`
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
                }
        }
        axios.get(baseUrl, config).then(res => {
            const courses = res.data.result
            console.log(courses);
            dispatch(fetchTraineeCourseSuccess(courses))
        }).catch(error => {
            const errMsg = error.message
            dispatch(fetchFailure(errMsg))
        })
    }
}


export const fetchTraineeTrack = (traineeId) => {
    return (dispatch) => {
        dispatch(fetchRequest)
        const baseUrl = `https://amalitech-tms.herokuapp.com/tracks?user=${traineeId}`
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
                 }
        }
        axios.get(baseUrl, config).then(res => {
            const tracks = res.data.result
            dispatch(fetchTraineeTrackSuccess(tracks))
        }).catch(error => {
            const errMsg = error.message
            dispatch(fetchFailure(errMsg))
        })
    }
}



export const addTrainee = (trainee) => {
    console.log(trainee);
    return () => {
        const url = "https://amalitech-tms.herokuapp.com/users"
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
                   }
        }

        axios.post(url, trainee, config).then(res => {
            console.log(res.data)

        }).catch(error => {
            if (error) console.log(error.response.data)

        })
    }
}


export const addCourse = () => {
    return {
        type: ADD_COURSE

    }

}


export const addTrack = () => {
    return {
        type: ADD_TRACK

    }
}

export const assignCourse = () => {
    return {
        type: ASSIGN_COURSE

    }
}

export const save = () => {

}

export const updateTrainee = (trainee) => {
    console.log(trainee)
    return () => {
        const url = `https://amalitech-tms.herokuapp.com/users/${trainee.id}`
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
               }
        }
        const newTrainee = {
            firstname: trainee.firstname,
            lastname: trainee.lastname,
            email: trainee.email,
            batch_name: trainee.batch_name,
            password: trainee.password,
            role: trainee.role
        }
        axios.put(url, newTrainee, config).then(res => {
            console.log(res)

        }).catch(error => {
            if (error) console.log(error.response.data)

        })
    }
}

export const delTrainee = (id) => {
    return () => {
        const url = `https://amalitech-tms.herokuapp.com/users/${id}`
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
                     }
        }
        console.log(url)
        axios.delete(url, config).then(res => {
            console.log(res.data)
        }).catch(error => {
            if (error) console.log(error.response.data)
        })
    }
}

export const addTracks = (track) => {
    console.log(track);
    return () => {
        const url = "https://amalitech-tms.herokuapp.com/tracks"
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           

            }
        }

        axios.post(url, track, config).then(res => {
            console.log(res.data)

        }).catch(error => {
            if (error) console.log(error.response.data)

        })
    }
}

export const delTrack = (id) => {
    return () => {
        const url = `https://amalitech-tms.herokuapp.com/tracks/${id}`
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
                     }
        }
        axios.delete(url, config).then(res => {
            console.log(res.data)
        }).catch(error => {
            if (error) console.log(error.response.data)
        })
    }
}

export const addCourses = (course) => {
    console.log(course);
    return () => {
        const url = "https://amalitech-tms.herokuapp.com/courses"
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           

            }
        }

        axios.post(url, course, config).then(res => {
            console.log(res.data)

        }).catch(error => {
            if (error) console.log(error.response.data)

        })
    }
}

export const delCourse = (id) => {
    return () => {
        const url = `https://amalitech-tms.herokuapp.com/courses/${id}`
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
                     }
        }
        axios.delete(url, config).then(res => {
            console.log(res.data)
        }).catch(error => {
            if (error) console.log(error.response.data)
        })
    }
}

export const updateTrack = (track) => {
    console.log(track)
    return () => {
        const url = `https://amalitech-tms.herokuapp.com/tracks/${track.id}`
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
               }
        }
        const newTrack = {
            track_name: track.track_name,
            track_master: track.track_master,
        }
        axios.put(url, newTrack, config).then(res => {
            console.log(res.data)
        }).catch(error => {
            if (error) console.log(error.response.data)
        })
    }
}
export const AssignCourse =(newAssign)=>{
    console.log(newAssign);
    return()=>{
        const url = `https://amalitech-tms.herokuapp.com/courses/${newAssign.course._id}?enroll=${newAssign.trainee._id}`
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
               }
        }
        
        axios.put(url, newAssign.course, config).then(res => {
            console.log(res.data)

        }).catch(error => {
            if (error) console.log(error.response.data)

        })
    }
}
export const AssignTrack = (newAssign)=>{
    return()=>{
        const url = `https://amalitech-tms.herokuapp.com/tracks/${newAssign.track._id}?enroll=${newAssign.trainee._id}`
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
               }
        }
        axios.put(url, newAssign.track, config).then(res => {
            console.log(res.data)

        }).catch(error => {
            if (error) console.log(error.response.data)

        })
    }
}




export const getUserDetails = (user) => {

    return (dispatch) => {
        
        const baseUrl = `https://amalitech-tms.herokuapp.com/users/${user}`
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`           
            }
        }

        axios.get(baseUrl, config).then(res => {
            const userData= res.data.result
             dispatch(getUserDetail(userData))
           
        }).catch(error => {
            if(error) console.log(error)
        })
    }
}



