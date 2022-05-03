import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
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
