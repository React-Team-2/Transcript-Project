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
          <Route exact path="/dashboard" component={Analytics} />
        <Switch>
          <Route exact path="/courses" component={Course} />
          <Route exact path="/transcript" component={Transcript} />
          <Route exact path="/tracks" component={Track} />
        </Switch>
      </Router>
     
    </main>
  );
};

export default Main;