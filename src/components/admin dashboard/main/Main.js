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
      <Route exact path="/admin/dashboard" component={Analytics} />
        <Switch>
          <Route path="/admin/trainees" component={Trainee} />
          <Route path="/admin/courses" component={Course} />
          <Route path="/admin/tracks" component={Track} />
          <Route path="/admin/assessment" component={Assessment}/>
          <Route path="/admin/progress-report" component={ProjectReport} />
        </Switch>
      </Router>
     
    </main>
  );
};

export default Main;
