import Home from './HOme';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PizzaDetails from './components/PizzaDetails';
function App() {
  return (
    <div className="App-Back">
        <Router>
    <div className="App">
         <Navbar />
         <hr className='line'/>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/pizzas/:key'>
            <PizzaDetails></PizzaDetails>
          </Route>
        </Switch>
   
    </div>
    </Router>
    </div>
  );
}

export default App;
