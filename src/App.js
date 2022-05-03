import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './home/Home'
import Create from './create/Create'
import Search from './search/Search'
import Recipe from './recipe/Recipe'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home/>
          </Route>
        </Switch>

        <Switch>
          <Route exact path={"/create"}>
            <Create/>
          </Route>
        </Switch>

        <Switch>
          <Route exact path={"/search"}>
            <Search/>
          </Route>
        </Switch>

        <Switch>
          <Route exact path={"/recipe/:id"}>
            <Recipe/>
          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App
