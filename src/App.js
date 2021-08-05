
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Category from './components/category/Category';
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Burger from './Burger/Burger';
import Pizza from './Pizza/Pizza';
import Sandwich from './Sandwich/Sandwich';
import Mojito from './Mojito/Mojito';
import Coldcoffee from './Coldcoffee/Coldcoffee';
import Shakes from './Shakes/Shakes';
import HotBeverages from './HotBeverages/HotBeverages';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Category}/>
        <Route path="/burger" component={Burger}/>
        <Route path="/pizza" component={Pizza}/>
        <Route path="/sandwich" component={Sandwich}/>
        <Route path="/mojito" component={Mojito}/>
        <Route path="/coldcoffee" component={Coldcoffee}/>
        <Route path="/shakes" component={Shakes}/>
        <Route path="/hotbeverages" component={HotBeverages}/>
      </Switch>
    </div>
  );
}

export default App;
