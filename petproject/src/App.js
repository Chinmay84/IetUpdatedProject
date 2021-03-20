
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import './Components/Frontpages/frontPage.css'
import Registration from './Components/Frontpages/Registration';
import NavBar from './Components/Frontpages/NavBar';
import DoctorPage from './Components/Frontpages/Doctorpage'
import FosterPage from './Components/Frontpages/Fosterpage'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/register" component={Registration}></Route>
            <Route path="/doctor" component={DoctorPage}></Route>
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
