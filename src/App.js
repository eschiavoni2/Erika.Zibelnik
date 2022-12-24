import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import Home from './pages/index';
import {HashRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
        </Routes>
      </HashRouter>
    );
}

export default App;
