import './App.css';
import MenuBar from "./components/MenuBar";
import {Route, Routes} from "react-router-dom";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import React from "react";

function App() {
  return (
    <div className="App">
        <div className="menu">
            <MenuBar/>
        </div>
        <div className="content">
            <Routes>
                <Route path="/"/>
                <Route path="/content1" element={<Content1/>}/>
                <Route path="/content2" element={<Content2/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
