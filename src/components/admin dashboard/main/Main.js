import "./Main.css";
import Analytics from '../pages/analytics/Analytics';
import Course from '../pages/course/Course';
import Trainee from '../pages/trainee/Trainee';
import Track from "../pages/track/Track";
import ProjectReport from '../pages/project report/ProjectReport';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Assessment from "../assessment/Assessment";




const Main = () => {
  return (
    <main>
      <Router>
      <Route exact path="/dashboard" component={Analytics} />
        <Switch>
          <Route path="/trainees" component={Trainee} />
          <Route path="/courses" component={Course} />
          <Route path="/tracks" component={Track} />
          <Route path="/assessment" component={Assessment}/>
          <Route path="/progress-report" component={ProjectReport} />
        </Switch>
      </Router>
     
    </main>
  );
};

export default Main;
