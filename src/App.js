import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./konten/Home'));
const Navbar = lazy(() => import('./komponen/Navbar'));
const Flower = lazy(() => import('./konten/Flower'));
const Money = lazy(() => import('./konten/Money'));
const Kado = lazy(() => import('./konten/Kado'));
const API = lazy(() => import('./konten/API'));
// const Flower = lazy(() => import('./konten/Flower'));
// const Landingpage = lazy(() => import('./Landingpage'));

const App = () => (
<Router>
 <Suspense fallback={<div>Loading...</div>}>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/Home" element={<Home />} />
 <Route path="/Navbar" element={<Navbar />} />
 <Route path="/Flower" element={<Flower />} />
 <Route path="/Money" element={<Money />} />
 <Route path="/Kado" element={<Kado />} /> 
 <Route path="/API" element={<API />} /> 
 {/* <Route path="/Ladingpage" element={<Landingpage />} /> */}
 </Routes>
 </Suspense>
</Router>
);
export default App;