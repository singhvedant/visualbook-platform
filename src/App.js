import React from 'react'

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Nav from './components/nav';
import Game from './components/game';

import About from './pages/about-us';
import Contact from './pages/contact';

const App =  () => {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/game" element={<Game code="0"/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
