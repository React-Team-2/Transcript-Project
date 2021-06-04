import React from 'react';
import About from './components/about page/About';
import Login from './components/login page/Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


const App = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path ='/' component ={About}/>
                <Route path='/Login' component= {Login} />
            </Switch>
        </Router>
    );
}
export default App;
