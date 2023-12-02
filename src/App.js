import logo from './logo.svg';
import { useState } from 'react';
import one from "../src/assets/images/3.png"
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Routes
} from 'react-router-dom';
import First from './first/first';
import One from './wrapped/one';
import Two from './wrapped/two';
import Three from './wrapped/three';
import Four from './wrapped/four';
import Six from './wrapped/six';
import Five from './wrapped/five';

let val=[]

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<First></First>} exact />
      {/* <Route path='/wrapped/1' element={<One name={val[0]}></One>} exact />
      <Route path='/wrapped/2' element={<Two />} exact />
      <Route path='/wrapped/3' element={<Three />} exact />
      <Route path='/wrapped/4' element={<Four />} exact />
      <Route path='/wrapped/5' element={<Five />} exact />
      <Route path='/wrapped/6' element={<Six />} exact /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
