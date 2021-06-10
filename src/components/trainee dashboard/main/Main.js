import "./Main.css";
import Analytics from '../pages/analytics/Analytics';
import Course from '../pages/courses/Course';
import Transcript from '../pages/transcript/Transcript';
import Track from '../pages/track/Track';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


const Main = () => {
  return (
    <main>
      <Router>
         
        <Switch>
          <Route exact path="/trainee" component={Analytics} />
          <Route exact path="/trainee/courses" component={Course} />
          <Route exact path="/trainee/transcript" component={Transcript} />
          <Route exact path="/trainee/tracks" component={Track} />
        </Switch>
      </Router>
     
    </main>
  );
};

export default Main;