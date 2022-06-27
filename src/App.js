import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
