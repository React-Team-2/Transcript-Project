import React from 'react'
import {Route, Redirect} from "react-router-dom"
import Auth from "./Auth"
// import store from "./store/reducers/user"

export default function ProtectedRoute({component: Component,...rest}) {
    return (
        
        <Route  {...rest} render={
            (props)=>{
                let token = localStorage.getItem('token')
                let user = localStorage.getItem('roleTitle')
                if(token || Auth.isAuthenticated()){
                    if (user === 'admin' && props.match.url === '/admin'){
                        return <Component exact {...props.match.url}/>
                    }
                    else if(user === 'user' && props.match.url === '/trainee'){
                        return <Component exact {...props.match.url} />
                    }
                    
                    return <Redirect to={{pathname:"/", state:{from:props.location}}}/>
                }else{
                   return <Redirect to={{pathname:"/", state:{from:props.location}}}/>
                   
                }
            }
        } /> 
    )
}
