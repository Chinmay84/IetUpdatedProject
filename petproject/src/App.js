
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import './Components/Frontpages/frontPage.css'
import Registration from './Components/Frontpages/Registration';
import NavBar from './Components/Frontpages/NavBar';
import DoctorPage from './Components/Frontpages/Doctorpage'
import FosterPage from './Components/Frontpages/Fosterpage'
import Login from './Components/Frontpages/Login3'
import FileUpload from './Components/ProfileHome/FileUpload';

//import Navbar from "./Components/Pages/Navbar";
//import Sidebar from "./Components/Pages/SideBar";

//import Posts from "./Components/Pages/Posts";
import Posts from './Components/Pages/Posts';
import SideBar from './Components/Pages/SideBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/register" component={Registration}></Route>
            <Route path="/doctor" component={DoctorPage}></Route>
            <Route path="/foster" component={FosterPage}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/file" component={FileUpload}></Route>
          </Switch>
          <div className="row">
            <SideBar/>
            <Posts/>
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
