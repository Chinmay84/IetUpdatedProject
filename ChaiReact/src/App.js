import "./App.css";
import Navbar from "./Components/Pages/Navbar";

import Sidebar from "./Components/Pages/SideBar";
import Posts from "./Components/Pages/Posts";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <div className="row">
          <Sidebar />

          <Posts />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
