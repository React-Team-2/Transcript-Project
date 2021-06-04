import React from 'react'
import {Route, Redirect} from "react-router-dom"
import Auth from "./Auth"
// import store from "./store/reducers/user"

export default function ProtectedRoute({component: Component,...rest}) {
    return (
        
        <Route  {...rest} render={
            (props)=>{
                let token = localStorage.getItem('token') 
                console.log(token)
                if(token || Auth.isAuthenticated()){
                    console.log("Access granted sucessfully")
                return <Component exact {...props}/>
                }else{
                    console.log("You don not have acess to this page")
                   return <Redirect to={{pathname:"/", state:{from:props.location}}}/>
                   
                }
            }
        } /> 
    )
}
