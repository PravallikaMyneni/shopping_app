
import './App.css';
import AppLeftBar from './AppLeftBar';
import ListContainer from './ListContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <AppLeftBar />
        <Switch>
          <Route exact path='/' component={ListContainer}></Route>
          <Route exact path='/cart' ></Route>
          <Route exact path='/about' ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
