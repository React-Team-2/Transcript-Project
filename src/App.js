import React from 'react';
import About from './components/about page/About';
import Login from './components/login page/Login';
import ProtectedRoute from './ProtectedRoute';
import AdminDashboard from './components/admin dashboard/AdminDashboard';
import TraineeDashboard from './components/trainee dashboard/TraineeDashboard';
import {Switch, Route , BrowserRouter as Router} from 'react-router-dom'


const App = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path ='/' component ={About}/>
                <Route path='/Login' component= {Login} />
                <Route path='/admin' component ={AdminDashboard} />
                <Route path='/trainee' component ={TraineeDashboard} />
            </Switch>
        </Router>
    );
}
export default App;
