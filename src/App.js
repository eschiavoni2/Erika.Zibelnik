import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import Home from './pages/index';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
