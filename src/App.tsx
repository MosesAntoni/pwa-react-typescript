import React, { FC, lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
const About = lazy(()=>import('./About'))
const Home =lazy(()=>import ('./Home'))



const App:React.FC = () => {
  return (
    <div className="App">
<BrowserRouter>
<Suspense fallback={<div>Loading...</div>}>
<nav>
  <ul>
    <li>
     <Link to='/' >Home</Link>
    </li>
    <li>
      <Link to="about">About</Link> 
    </li>
  </ul>
</nav>
<Routes>
  <Route path="about" element={<About/>}/>
  <Route path="/" element={<Home />}/>
</Routes>
</Suspense>
</BrowserRouter>

    </div>
  );
}

export default App;
