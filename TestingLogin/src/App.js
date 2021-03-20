
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Token from './Components/Auth/Token';




function App() {
  const userSignIn = useSelector(state => state.userSignIn);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/token" component={Test}></Route>
          {userSignIn ? <Route path="/admin" render="<h1>Admin home</h1>" /> : null}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
