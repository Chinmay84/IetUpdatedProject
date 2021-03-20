import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Pages/Navbar'
import Posts from './Components/Pages/Posts'
import Sidebar from './Components/Pages/SideBar'
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      
      <Sidebar/>

      <Posts/>
    <div className="facebook">
    
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
