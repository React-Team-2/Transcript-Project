import React from 'react'
import {Route, Redirect} from "react-router-dom"
import Auth from "./Auth"
// import store from "./store/reducers/user"

export default function ProtectedRoute({component: Component,...rest}) {
    return (
        
        <Route  {...rest} render={
            (props)=>{
                console.log(props)
                let token = localStorage.getItem('token')
                let user = localStorage.getItem('roleTitle')
                console.log(token)
                console.log(user)
                console.log(props.match.url)
                if(token || Auth.isAuthenticated()){
                    console.log("Access granted sucessfully")
                    if (user === 'admin' && props.match.url === '/admin'){
                        return <Component exact {...props.match.url}/>
                    }
                    else if(user === 'user' && props.match.url === '/trainee'){
                        return <Component exact {...props.match.url} />
                    }
                    
                    return <Redirect to={{pathname:"/", state:{from:props.location}}}/>
                }else{
                    console.log("You don not have acess to this page")
                   return <Redirect to={{pathname:"/", state:{from:props.location}}}/>
                   
                }
            }
        } /> 
    )
}
