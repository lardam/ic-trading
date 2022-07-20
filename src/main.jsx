import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { English, Español, Error } from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Error/>}/>
      <Route path="/ic-trading/*" element={<Español/>}/>
      <Route path="/ic-trading/en/*" element={<English/>}/>
    </Routes>
  </BrowserRouter>
)