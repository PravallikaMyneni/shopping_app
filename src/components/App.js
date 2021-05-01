
import './App.css';
import AppLeftBar from './AppLeftBar';
import ShopListContainer from './ShopListContainer';
import CartPage from './CartPage';
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
          <Route exact path='/' component={ShopListContainer}></Route>
          <Route exact path='/cart' component = {CartPage}></Route>
          <Route exact path='/about' ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
