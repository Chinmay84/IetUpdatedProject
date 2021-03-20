import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import Feed from './Components/Posts/Feed'


function App() {
  return (
    <div className="App">
    {/*  <Header/> */}
      <Header/>
      <SideBar/>
      <Feed/>
      {/*Widgets*/}

    </div>
  );
}

export default App;
