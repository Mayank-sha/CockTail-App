import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import './index.css';
// import components
import Navbar from './components/Navbar'
function CockTailApp() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path = "/" element={<Home/>}>
        </Route>
        <Route  path = "/about" element={<About/>}>
        </Route>
        <Route  path = "/cocktail/:id" element={<SingleCocktail/>}>
        </Route>
        <Route path = "*" element={<Error/>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default CockTailApp
