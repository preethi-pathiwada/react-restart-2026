import { useState } from 'react'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Products from "./pages/Products"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import {Routes, Route} from "react-router-dom"
import './App.css'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route exact path='/contacts' element={<Contacts/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/product/:id" element={<ProductDetailsPage/>}/>
    </Routes>
    </>
  )
}

export default App
