import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  HomePage,
  CounterButtonPage,
  NotFoundPage,
  PeopleListPage,
  ProtectedPage,
  ControlledFormPage,
  UnControlledFormPage,
  UserProfilePage,
} from "./pages";
import { NavBar } from "./NavBar";
import {FormsNavBar} from './FormsNavBar';
// import { CongratulationsMessage } from './CongratulationsMessage';
// import {Counter} from './Counter';
// import {Greeting} from './pages/Greeting';
// import { PeopleList } from './PeopleList';

function App() {
  // const [numberOfClicks, setNumberOfClicks] = useState(0);
  // const [hideMessage, setHideMessage] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="">
          <Switch>
            {/* <Route path='/' exact component={HomePage} /> */}
            <Route path="/" exact>
              <HomePage />{" "}
            </Route>
            <Route path="/counter" component={CounterButtonPage} />
            <Route path="/people-list" component={PeopleListPage} />
            <Route path="/protected">
              <ProtectedPage />
            </Route>
            <Route path="/user">
              <UserProfilePage />
            </Route>
            <Route path="/forms"> 
              <Router>
                <FormsNavBar />
                <Route path="/forms/controlled">
                  <ControlledFormPage />
                </Route>
                <Route path="/forms/uncontrolled">
                  <UnControlledFormPage />
                </Route>
              </Router>
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
        {/* <Link to='/'>Go to Home Page </Link>
      <Link to='/counter'>Go to Counter </Link>
      <Link to='/people-list'>Go to People </Link> */}
      </Router>
    </div>
  );
}

export default App;
