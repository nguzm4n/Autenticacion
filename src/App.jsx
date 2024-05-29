import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import NotFound from './componentes/NotFound'
import injectContext from './store/AppContext'
import Private from './componentes/Private'
import Nav from './componentes/Nav'


function App() {

  return (

    <BrowserRouter >
    <Nav />
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registro />} />
        <Route path="/private" element={<Private />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  )
}

export default injectContext(App)
