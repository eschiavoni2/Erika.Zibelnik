import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import Home from './pages/index';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
